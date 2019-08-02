<template>
    <div id="menu">
        <div v-for="(item,index) in menulist" :key="index" @click="btnclick(index)">
            <img :src="'../static/img/'+item.src" alt="">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:['menulist'],
    data(){
        return {

        }
    },
    methods:{
        btnclick(index){
            if(index == 0){
                this.$router.push('/home/newslist')
            }
        }
    }
}
</script>

<style scoped>
    #menu{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center
    }
    #menu div{
        width: 33%;
        text-align: center;
        padding: 10px 0;
    }
    #menu div p{
        font-size: 1.4rem;
    }
    #menu div img{
        width: 50%;
    }
</style>


