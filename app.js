var express     = require('express');
var fs          = require('fs');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var morgan      = require('morgan');

var { exec }    = require("child_process");
var path        = './sherlock/sherlock.py';

const app       = express()
const port      = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/', express.static('public'))

app.post('/search', (req, res) => {
    let username = req.body.params.username;

    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            console.error(err)
            return;
        };

        let script = exec(`python3 ${path} ${username} --folderoutput results`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
        
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }    
        });

        script.on('close', () => {
            res.redirect(`/readfile/${username}`);
            return;
        });
    });
});

app.get('/readfile/:username', (req, res) => {
    let filepath = `./results/${req.params.username}.txt`;

    fs.access(filepath, fs.F_OK, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error'
            });
            return;
        };

        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    message: 'Internal Server Error'
                });
                return;
            }

            let profiles = data.split('\n')
                               .map((profile) => profile);

                profiles = profiles.slice(0, profiles.length - 1);

            res.status(200).json({
                message: 'Success',
                data: {
                    profiles: profiles,
                    items: profiles.length
                },

            })
        }); 
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));