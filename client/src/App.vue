<template>
<div id="app">
    <div class="header">
        <!-- <router-link to="/">Main</router-link> | -->
        <!-- <router-link to="/about">About</router-link> -->
        <router-view />
    </div>
</div>
</template>

<style>
* {
    font-family: Tahoma, Arial, sans-serif;
}

body {
    font-size: 0.9rem;
    background-color: hsl(0, 0%, 96%);
    padding-bottom: 60px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: hsl(210, 11%, 15%);
    text-align: left;
}

.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
