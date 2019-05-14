<template>
    <div id="showboke">
        <h2>博客总览</h2>
        <input class="input-sousuo" type="text" placeholder="搜索" v-model="sousuo" />
        <div class="swbk-inner" v-for="item in ssBoke">
            <h2>{{item.title}}</h2>
            <p v-focus>{{item.body | slh}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowBoke',
    data () {
        return {
            items:[],
            sousuo:""
        }
    },
    created (){
        this.$http.get("https://vue-test2-85744.firebaseio.com/posts.json").then(function (data){
            // console.log(data.json());
            return data.json();
            // this.items = data.body.slice(0,10)
            // console.log(this.items);
        }).then(function (data){
            console.log(data);
            var xinItems = []
            for(var item in data){
                console.log(data[item]);

                xinItems.push(data[item])
            }
            this.items = xinItems
        })
    },
    methods:{
        // post:function(){
        //     this.$http.post("http://jsonplaceholder.typicode.com/posts",{
        //         title:this.boke.title,
        //         body:this.boke.content,
        //         userId:1
        //     }).then(function (data){
        //         console.log(data);
        //     })
        // },

        // get:function(){
        //     this.$http.post("http://jsonplaceholder.typicode.com/posts").then(function (data){
        //         console.log(data);
        //     })
        // },

        // getBen:function(){
        //     this.$http.get("../../static/getbendi.json").then(function (data){
        //         console.log(data);
        //     })
        // }
    },
    computed:{
        ssBoke:function (){
            return this.items.filter((val)=>{
                return val.title.match(this.sousuo)
            })
        }
    },
    filters:{
        slh:function (value){
            return value.slice(0,100) + '.....'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#showboke{
    width: 600px;
    margin: 0 auto;
    padding-top: 30px;
    >h2{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .input-sousuo{
        padding: 0 6px;
        border: 1px solid #ccc;
        height: 24px;
        font-size: 12px;
        margin-bottom: 20px;
    }
    .swbk-inner{
        margin-bottom: 20px;
        background: #ece9ec;
        padding: 15px;
        >h2{
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 5px;
            font-weight: bold;
        }
        >p{
            font-size: 12px;
            line-height: 20px;
        }
    }
}

</style>
