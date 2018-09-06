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
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                testData: []
            }
        },
//        mounted () {
//
//        },
//        beforeDestroy () {
//
//        },
//        methods: {
//
//        },
        created () {
            this.getData();
        },
        methods: {
            getData () {
                // this是指向当前vue实例，千万不能丢掉，不然会报方法或对象undefined
                // 调用的接口是豆瓣公开的，可以直接测试调用
                this.$http.get('/api/v2/book/1220562').then(response => {
                    this.testData = response.data;
            }).catch(error => {
                console.log(error);
        })
        }
        }
    }
</script>
