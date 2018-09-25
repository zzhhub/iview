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
        <h5>父组件</h5>
        <input type="text" v-model="role"/>
        <!-- 父组件监听add-result-->
        <div>{{resultList}}</div>
        <children-a :role="role" @add-result="getResult">
            <p slot="header">我是Header</p>
            <p slot="footer">我是footer</p>
        </children-a>
    </div>
</template>
<script>
    import childrenA from './childrenA.vue';
    export default {
        components:{
            childrenA
        },
        data () {
            return {
                testData: [],
                role:"",
                resultList:""
            }
        },
        created () {
            this.getData();
        },
        methods: {
            getData () {
                // this��ָ��ǰvueʵ����ǧ���ܶ�������Ȼ�ᱨ���������undefined
                // ���õĽӿ��Ƕ��깫���ģ�����ֱ�Ӳ��Ե���
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
            },
            getResult(name){
                this.resultList = name;
            }
        },
    }
</script>
<style scoped>
    .index{
        border: solid 2px #f0c;
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
        margin-bottom: 20px;
    p{
        margin: 0 0 50px;
    }
    }
    .ivu-row-flex{
        height: 100%;
    }
    }
</style>
