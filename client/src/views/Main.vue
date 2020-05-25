<template>
<div class="row">
    <div class="left col-lg-6 col-md-7 col-sm-12">
        <search />
    </div>
    <div class="right col-lg-6 col-md-4 col-sm-12">
        <marketing />
    </div>
</div>
</template>

<script>
import Search from './components/Search'
import Marketing from './components/Marketing'

export default {
    name: 'Main',
    components: {
        Search,
        Marketing
    }
}
</script>

<style scoped>
.row {
    margin: 0px !important;
    position: absolute;
    overflow: hidden;
    width: 100%;
    /* height: auto; */
}
.left {
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: hsl(0, 0%, 100%);
    /* box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02); */
}

.right {
    display: flex;
    justify-content: center;
    background: hsl(220, 43%, 97%);
    height: 100vh;
}
</style>
