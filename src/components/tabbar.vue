<template>
    <div id="tabbar">
        <div class="container">
            <div :class="['subbox',{'active':actindex == index}]" v-for="(item,index) in tablist" :key="index" @click="jump(index)">
                <!-- <img :src="require('../assets/img/'+item.src)" alt=""> -->
                <img :src="'../static/img/'+item.src" alt="">
                <p>{{item.name}}</p>
                <span v-if="item.flag">0</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['tablist','actindex'],
    data(){
        return {

        }
    },
    methods:{
        jump(index){
            this.$emit('jump',index)
        }
    }
}
</script>

<style scoped>
    #tabbar{
        height: 100%;
    }
    .container{
        width: 100%;
        height: 6rem;
        background-color: #e6e1e1;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }
    .subbox{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .active{
        color: red;
    }
    .subbox p{
        font-size: 2rem
    }
    .subbox img{
        width: 40%;
    }
    .subbox span{
        width: 2rem;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        color: white;
        font-size: 1.4rem;
        position: absolute;
        background-color: red;
        border:none;
        border-radius: 50%;
        top: 0.2rem;
        right:1.6rem
    }
</style>


