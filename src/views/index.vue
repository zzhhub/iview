<style scoped>
    .index{
        width: 100%;
        /*position: absolute;*/
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Alert banner type="warning">Notice: notification contents...</Alert>
        <Alert banner closable type="warning">Notice: notification contents...</Alert>
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="../images/logo.png">
                </h1>
                <h1 v-for="author in testData.author">{{author}}</h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button @click="handleStart">Start iView</Button>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                testData: []
            }
        },
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
            },
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        },
    }
</script>
