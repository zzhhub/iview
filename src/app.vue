<style scoped xmlns="http://www.w3.org/1999/html">
    @import 'styles/common.css';
    .list-group {
        position: relative;
        z-index: 2;
        margin: 1rem 0;
    }
    .list-group .router-link-active{
        background: #f5f5f5;
        border-radius: 5px;
        margin:0 0.5rem;
        padding: 0.4rem 0.6rem;
        font-size: 1rem;
        cursor: pointer;
    }
</style>
<template>
    <div>
        <div class="list-group">
            <Row>
                <Col span="24">
                    <router-link class="router-link-active" to="/">index</router-link>
                    <router-link class="router-link-active" to="/grid">grid</router-link>
                    <router-link class="router-link-active" to="/button">button</router-link>
                    <router-link class="router-link-active" to="/icon">icon</router-link>
                    <router-link class="router-link-active" to="/card">card</router-link>
                    <router-link class="router-link-active" to="/modal">modal</router-link>
                    <router-link class="router-link-active" to="/selectOptions">selectOption</router-link>
                    <router-link class="router-link-active" to="/modal">modal</router-link>
                    <router-link class="router-link-active" to="/notice">notice</router-link>
                    <router-link class="router-link-active" to="/drawer">drawer</router-link>
                    <router-link class="router-link-active" to="/tree">tree</router-link>
                    <router-link class="router-link-active" to="/time">time</router-link>
                    <router-link class="router-link-active" to="/childrenA">childrenA</router-link>
                    <router-link class="router-link-active" to="/parent">parent</router-link>
                    <router-link class="router-link-active" to="/websitedemo">websitedemo</router-link>
                </Col>
            </Row>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {

    }
</script>
