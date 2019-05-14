<template>
    <div id="bokehead">
        <ul>
            <li>
                <router-link exact to="/">首页</router-link>
                <router-link exact to="/add">我的博客</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'bokehead',
    data () {
        return {
            items:[],
            sousuo:""
        }
    },
    methods:{
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#bokehead{
    background: #da0c31;
    text-align: center;
    padding: 20px 0;
    ul{
        li{
            >a{
                color: #fff;
                display: inline-block;
                border-radius: 3px;
                font-size: 12px;
                padding: 6px 10px;
                margin: 0 12px;
            }
            .router-link-active{
                background: rgba(255,255,255,0.6);
            }
        }
    }
}

</style>
