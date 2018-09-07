<style scoped>
    @import 'styles/common.css';
    .list-group {
        position: relative;
        z-index: 2;
        margin: 5rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .list-group .router-link-active{
        background: #f5f5f5;
        border-radius: 5px;
        margin:0 0.5rem;
        padding: 20px;
        font-size: 2rem;
        cursor: pointer;
    }
</style>
<template>
    <div>
        <div class="list-group">
            <router-link class="router-link-active" to="/">index</router-link>
            <router-link class="router-link-active" to="/grid">grid</router-link>
            <router-link class="router-link-active" to="/button">button</router-link>
            <router-link class="router-link-active" to="/icon">icon</router-link>
            <router-link class="router-link-active" to="/card">card</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {

    }
</script>
