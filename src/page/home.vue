<template>
    <div id="home">
        <div class="banner">
            <img  alt="" ref="aimg">
        </div>
        <div>
            <menuList :menulist='menulist'></menuList>
        </div>
    </div>
</template>

<script>
import {$http} from '../network/request'
import menuList from '../components/menu'
export default {
    components:{menuList},
    data(){
        return {
            menulist:[
                {title:'新闻资讯',src:'menu1.png'},
                {title:'图片分享',src:'menu2.png'},
                {title:'商品购买',src:'menu3.png'},
                {title:'留言反馈',src:'menu4.png'},
                {title:'视频专区',src:'menu5.png'},
                {title:'联系我们',src:'menu6.png'}
            ]
        }
    },
    created(){
        this.getlunboimg()
        
    },
    methods:{
        getlunboimg(){
            $http({
                url:'/api/getlunbo',
                methods:'get'
            }).then(res =>{
                console.log(res)
                this.$refs.aimg.src = res.message[2].img
            })
        }
    }
}
</script>

<style scoped>
    #home{
        /* background-color: pink; */
        width: 100%;
        height: 100%;
    }
    .banner{
        width: 100%;
        height: 40vw;
    }
    .banner img{
        width: 100%;
        
    }
</style>


