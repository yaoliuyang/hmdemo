<template>
    <div id="newsdetail">
        <div @click="goback" class="back">返回</div>
        <div class="title">{{newsdata.title}}</div>
        <div v-html="newsdata.content" class="content"></div>
        <div class="comment">
            <pub :newsid='id'></pub>
        </div>
    </div>
</template>

<script>
import {$http} from '../network/request'
import pub from '../components/pub'
export default {
    components:{pub},
    data(){
        return{
            id:'',
            newsdata:[]
        }
    },
    created(){
        this.id = this.$route.params.id
        this.getData()
    },
    methods:{
         goback(){
            this.$router.go(-1)
        },
        getData(){
            $http({
                url:'/api/getnew/'+this.id,
                method:'get'
            }).then(res=>{
                // console.log(res)
                this.newsdata = res.message[0]
            })
        }
    }
}
</script>

<style >
    #newsdetail .title{
        font-size: 3rem
    }
    #newsdetail .comment{
        width: 100%
    }
    #newsdetail .back{
        font-size: 2.5rem;
        color:red 
    }
    #newsdetail .content p{
        font-size: 1.6rem;
        color: red
    }
</style>


