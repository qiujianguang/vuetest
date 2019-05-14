<template>
    <div id="addboke">
        <h2>添加博客</h2>

        <form class="adbk-message">
            <div class="msg-inner">
                <label class="msg-txt" for="">主题：</label>
                <input class="input-txet" v-model="boke.title" type="text" placeholder="请输入主题" />
            </div>

            <div class="msg-inner">
                <label class="msg-txt" for="">内容：</label>
                <textarea placeholder="请输入内容" v-model="boke.content">
                    
                </textarea>
            </div>

            <div class="msg-inner">
                <label class="msg-txt" for="">分类：</label>
                
                <div class="msg-checkboxs">
                   <p v-for="item in fenlei">
                       {{item.message}}<input class="input-checkbox" type="checkbox" v-bind:value="item.message" v-model="boke.xuanzhong" />
                   </p>
                </div>
            </div>

            <div class="msg-inner">
                <label class="msg-txt" for="">作者：</label>
                
                <select class="msg-xiala" v-model="boke.zuozhe">
                    <option>土</option>
                    <option>肥</option>
                    <option>圆</option>
                    <option>阿黄</option>
                </select>
            </div>

            <div class="msg-inner">
                <input class="input-submit" type="button" value="提交" v-on:click="post()" />

                <input class="input-submit" type="button" value="get本地" v-on:click="getBen()" />

                <input class="input-submit" type="button" value="get" v-on:click="get()" />
            </div>
        </form>

        <hr />
        <div>{{boke.title}}</div>
        <ul>
            <li v-for="item in boke.xuanzhong">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'addboke',
    data () {
        return {
            boke:{
                title:"",
                content:"",
                xuanzhong: [],
                zuozhe:""
            },
            fenlei:[
                {
                    message:"Vue.js"
                },
                {
                    message:"Angular4.js"
                },
                {
                    message:"Node.js"
                },
                {
                    message:"React.js"
                }
            ]
        }
    },
    methods:{
        post:function(){
            this.$http.post("http://cloud.bmob.cn/472ebdefecc1831e/test",{
                test:this.boke.title
            }).then(function (data){
                console.log(data);
            })
        },

        // get:function(){
        //     this.$http.post("http://jsonplaceholder.typicode.com/posts").then(function (data){
        //         console.log(data);
        //     })
        // },

        get:function(){
            this.$http.post("http://cloud.bmob.cn/472ebdefecc1831e/yingxiong").then(function (data){
                console.log(data);
            })
        },

        getBen:function(){
            this.$http.get("../../static/getbendi.json").then(function (data){
                console.log(data);
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#addboke{
    width: 500px;
    margin: 0 auto;
    >h2{
        font-size: 16px;
        font-weight: bold;
        padding: 40px 0 20px 0;
    }
    .adbk-message{
        .msg-inner{
            margin-bottom: 20px;
            .msg-txt{
                font-size: 14px;
                display: block;
                margin-bottom: 10px;
            }
            .input-txet{
                border: 1px solid #ddd;
                font-size: 12px;
                height: 26px;
                padding: 0 8px;
                width: 100%;
            }
            textarea{
                border: 1px solid #ddd;
                font-size: 12px;
                line-height: 24px;
                padding: 6px 8px;
                resize: none;
                min-height: 140px;
                width: 100%;
            }
            .msg-checkboxs{
                overflow: hidden;
                >p{
                    float: left;
                    font-size: 12px;
                    margin-right: 15px;
                    .input-checkbox{
                        margin-left: 6px;
                        vertical-align: -2px;
                    }
                }
            }
            .msg-xiala{
                border: 1px solid #ddd;
                font-size: 12px;
                height: 26px;
                padding: 0 8px;
                width: 100%;
            }
            .input-submit{
                background: #da0c31;
                border: none;
                color: #fff;
                font-size: 12px;
                width: 60px;
                height: 26px;
                border-radius: 3px;
            }
        }
    }
}
</style>
