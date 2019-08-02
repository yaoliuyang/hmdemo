<template>
    <div id="newslist">
        <div @click="goback" class="back">返回</div>
        <div class="content">
            <div class="item" v-for="(item,index) in newlist" :key="index" @click="goDetail(item.id)">
                <div class="left_img">
                    <img :src="item.img_url" alt="">
                </div>
                <div class="right_box">
                    <div class="title">{{item.title}}</div>
                    <div class="oth">时间{{item.add_time}}---点击次数{{item.click}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {$http} from '../network/request'
export default {
    data(){
        return{
            newlist:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        goback(){
            this.$router.go(-1)
        },
        getData(){
            $http({
                url:'/api/getnewslist',
                method:'get'
            }).then(res=>{
                // console.log(res)
                this.newlist = res.message
            })
        },
        goDetail(id){
            this.$router.push('/home/newslist/newsdetail/'+id)
        }
    }
}
</script>

<style scoped>
    .content{
        width: 100%;
    }
    .back{
        font-size: 2.5rem;
        color:red 
    }
    .item{
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 7rem;
    }
    .left_img{
        flex:1
    }
    .left_img img{
        width: 85%;
    }
    .right_box{
        flex: 4
    }
</style>


