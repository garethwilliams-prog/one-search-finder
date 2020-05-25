<template>
<div class="row search-holder fadeIn" v-if="form.params">
    <div class="col-lg-12">
        <div class="col-lg-12 logo-holder">
            <img class="img" style="width: 70px; height: 70px;" src="~@/assets/img/logo.png" alt="logo">
        </div>

        <div class="col-sm-12">
            <h3 class="page-title">One Search profile finder</h3>
        </div>

        <div class="col-lg-12">
            <form v-on:submit.prevent="Search">
                <div class="row">
                    <div class="col-lg-12" style="display: flex; justify-content: center">
                        <input class="form-control" name="username" type="text" placeholder="Username" v-model="form.params.username" :disabled="loading">
                        <button type="submit" class="btn btn-find mr-2" :disabled="loading"><i class="fas fa-search"></i> <span>Find Profile</span></button>
                    </div>

                    <div class="col-lg-12 mt-4" v-if="loading">
                        <loader :text="'Searching Online Profiles'" />
                    </div>
                </div>
            </form>
        </div>

        <div class="col-lg-12 mt-4 fadeIn" style="padding-right: 65px; max-height: 500px; overflow-y: scroll;" v-if="form.params.results && !loading">
            <div class="alert alert-light text-center sticky-header" role="alert" v-if="form.params.results.profiles.length > 0">
                <p><i class="fas fa-users"></i> <strong>{{ form.params.results.items }}</strong> Profile(s) found</p>
            </div>

            <div v-if="form.params.results.profiles.length > 0">
                <div class="list-group mb-2" v-for="(profile, index) in form.params.results.profiles" :key="index">
                    <a :href="profile" target="_blank" rel="noopener noreferrer" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1"><span><img :src="`//logo.clearbit.com/${GenerateIconText(profile)}.com?`" style="height: 30px; width: auto"></span> {{ GetDomain(profile) }}</h5>
                            <small>Tap/Click to open link <i class="fas fa-external-link-alt"></i></small>
                        </div>

                        <p class="mb-1 mt-3"><i class="fas fa-link"></i> Link: <span><a :href="profile" target="_blank" rel="noopener noreferrer">{{ profile }}</a></span></p>
                        <p class="mb-1 mt-1"><i class="fas fa-users"></i> Username: <span>{{ history.username }}</span></p>
                        <small>Please do not use user's profile result for any <strong>malicious intent</strong>.</small>
                    </a>
                </div>
            </div>

            <div v-else>
                <div class="alert alert-danger" role="alert">
                    <p><i class="fas fa-user-times"></i> - <strong>No results found: </strong>No results was found under {{ history.username }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import API from '../../api'
import Loader from './Loader'

export default {
    name: 'Search',
    components: {
        Loader
    },
    data() {
        return {
            form: {
                params: null
            },
            history: {
                username: ''
            },
            loading: false
        }
    },
    mounted() {
        this.SetValues();
    },
    methods: {
        Search() {
            const {
                username
            } = this.form.params;

            this.history.username = username;

            let formattedUsername = this.FormatString(username);

            formattedUsername == '' ? false : this.Request(formattedUsername);
        },

        ClearSearch() {
            this.form.params.username = '';
        },

        Request(username = '') {
            this.loading = true;

            API.post('/search', {
                    username
                })
                .then((response) => {
                    this.form.params.results = response.data.data;
                    this.loading = false;
                    this.form.params.username = '';
                })
                .catch((exception) => {
                    console.error(exception);

                    this.loading = false;
                    this.form.params.username = '';
                });
        },

        FormatString(username = '') {
            return username.replace(/\s/g, '').toLowerCase();
        },

        GetDomain(profile = '') {
            const host = new URL(profile).hostname.replace('www', '').split('.');

            let domainName = host.length > 2 ? host[1] : host[0];

            return domainName.substr(0, 1).toLocaleUpperCase() + domainName.substring(1, domainName.length);
        },

        GenerateIconText(profile = '') {
            return this.GetDomain(profile).toLowerCase();
        },

        SetValues() {
            this.form.params = {
                username: '',
                results: null
            }
        }
    },
}
</script>

<style scoped>
.page-title {
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 0;
    line-height: 70px;
    font-weight: bold;
    text-align: center;
}

.form-control {
    border: none;
    background: hsl(223, 47%, 97%);
    width: 60%;
    margin-right: 5px;
}

.btn:disabled {
    opacity: .65;
    background: hsl(0, 0%, 66%);
    border: hsl(0, 0%, 66%);
}

.btn-find {
    background: #26a4d6;
    border-color: #26a4d6;
    color: #fff;
    cursor: pointer;
}

.btn-find:hover {
    background: #30B7DF;
    border-color: #30B7DF;
    color: #fff;
}

.btn-find:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(55, 65, 83, .25);
}

.btn-find:active {
    border-color: #30B7DF;
}

.btn-light {
    margin-top: 10px;
}

.search-holder {
    height: 100%;
}

.logo-holder {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 100px;
}

.sticky-header {
    position: sticky;
    top: 0%;
    z-index: 2;
    background: hsl(0, 0%, 100%);
}

h5 {
    color: hsl(0, 1%, 68%);
}

/* total width */
.scrollbar::-webkit-scrollbar {
    background-color: #fff;
    width: 16px
}

/* background of the scrollbar except button or resizer */
.scrollbar::-webkit-scrollbar-track {
    background-color: #fff
}

.scrollbar::-webkit-scrollbar-track:hover {
    background-color: #f4f4f4
}

/* scrollbar itself */
.scrollbar::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 5px solid #fff
}

.scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a5;
    border: 4px solid #f4f4f4
}

/* set button(top and bottom of the scrollbar) */
.scrollbar::-webkit-scrollbar-button {
    display: none
}

/* div box */
body {
    background-color: #babac0
}

.scrollbar {
    height: 75vh;
    width: 25vw;
    min-width: 150px;
    background: #fff;
    overflow-y: scroll
}
</style>
