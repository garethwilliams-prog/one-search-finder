<template>
<div class="container fadeIn">
    <div class="row">
        <div class="col-lg-12">
            <h6><img class="img" src="~@/assets/img/logo.png" alt="logo"> <span>One Search</span></h6>
        </div>

        <div class="col-sm-12 text-center">
            <h3>
                Access public profiles
                with <span class="sub-text">one search</span>
            </h3>
        </div>

        <div class="col-lg-12" style="display: flex; justify-content: center">
            <img src="~@/assets/img/banner.png" alt="">
        </div>

        <div class="col-lg-12 text-center">
            <small>Please use the information provided by our services for research purposes only.</small>
        </div>

        <div class="col-lg-12 mt-5 text-center">
            <div class="row" style="display: flex; justify-content: center">
                <div class="col-lg-3">
                    <a href="#" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-donate"><i class="fas fa-donate"></i> Donate</button></a>
                </div>
                <div class="col-lg-3">
                    <a href="https://github.com/garethwilliams-prog/get-social-links" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-github"><i class="fas fa-code"></i> Open Source</button></a>
                </div>
                <div class="col-lg-3">
                    <a href="#" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-contact"><i class="fab fa-wpforms"></i> Contact Us</button></a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
h6 {
    width: 100%;
    display: flex;
    align-items: center;
    height: 150px;
}

h6 span {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sub-text {
    color: #5BDDBD;
}

.img {
    height: 30px;
    width: 30px;
}

.btn-donate {
    background: #e5a3a3;
    border-color: #e5a3a3;
    color: #fff;
    width: 150px;
}

.btn-donate:hover {
    background: #ff9b9b;
    border-color: #ff9b9b;
    color: #fff;
}

.btn-donate:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(255, 155, 155, .25);
}

.btn-donate:active {
    border-color: #ff9b9b;
}

.btn-github {
    background: #374053;
    border-color: #374053;
    color: #fff;
    width: 150px;
}

.btn-github:hover {
    background: #f5c050;
    border-color: #f5c050;
    color: #374053;
}

.btn-github:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(55, 65, 83, .25);
}

.btn-contact:active {
    border-color: #f5c050;
}

.btn-contact {
    background: #26a4d6;
    border-color: #26a4d6;
    color: #fff;
    width: 150px;
}

.btn-contact:hover {
    background: #30B7DF;
    border-color: #30B7DF;
    color: #fff;
}

.btn-contact:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(55, 65, 83, .25);
}

.btn-contact:active {
    border-color: #30B7DF;
}
</style>
