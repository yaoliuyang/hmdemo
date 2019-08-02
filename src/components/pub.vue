<template>
    <div id="pub">
        <div class="title">发表评论</div>
        <div>
            <input type="text" v-model="text">
        </div>
        <div @click="Publish" class="btn">发表评论</div>
        <div class="container">
            <div class="item" v-for="(item,index) in publist" :key="index">
                <div class="top">第{{index+1}}楼 用户名：{{item.user_name}} 发表时间 {{item.add_time}}</div>
                <div class="content">{{item.content}}</div>
            </div>
        </div>
        <div class="btn" @click="getMore">加载更多</div>
    </div>
</template>

<script>
import {$http} from '../network/request'
export default {
    props:['newsid'],
    data(){
        return{
            text:'dddddd',
            pageindex:1,
            publist:[]
        }
    },
    created(){
        this.getPub()
    },
    methods:{
        Publish(){
            $http({
                url:'/api/postcomment/'+this.newsid,
                method:'post',
                data:{
                    content:this.text
                }
            }).then(res=>{
                console.log('OKOkokok')
                this.publist=[]
                this.getPub()
            })
        },
        getPub(){
            $http({
                url:'/api/getcomments/'+this.newsid,
                method:'get',
                params:{
                    pageindex:this.pageindex
                }
            }).then(res=>{
                // console.log(res)
                this.publist = this.publist.concat(res.message)
                // console.log(this.publist)
            })
        },
        getMore(){
            this.pageindex++
            this.getPub()
        }
    }
}
</script>

<style scoped>
    .btn{
        width: 80%;
        margin-left: 10%;
        background-color: skyblue;
        height: 3rem;
        line-height: 3rem;
        text-align-last: center;
        font-size: 2rem
    }
    .title{
        font-size: 3rem
    }
    input{
        width: 95%;
        border: 1px solid blue;
        outline: none;
        height: 2.5rem;
        font-size: 1.6rem;
        margin: 10px 0;
    }
    .top{
        background-color: burlywood
    }
</style>


