<template>
  <div id="app">
    <div class="container">
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </div>
    <div class="foot">
      <tabbar :tablist="tablist" :actindex="actindex" @jump="jumpto"></tabbar>
    </div>
    
  </div>
</template>

<script>
import tabbar from './components/tabbar'
export default {
  name: 'App',
  components:{tabbar},
  data(){
    return {
      transitionName:'',
      tablist:[
        {name:'首页',src:'shouye.png'},
        {name:'会员',src:'wode.png'},
        {name:'购物车',src:'gouwu.png',flag:1},
        {name:'搜索',src:'chazhao.png'}
      ],
      actindex:0,
      addr:['home','member','cart','search']
    }
  },
  methods:{
    jumpto(index){
      this.actindex = index
      this.$router.push(`/${this.addr[index]}`)
    }
  },
  watch:{
    $route(to,from){
      let deep = to.meta.deep - from.meta.deep
      if(deep>0){
        this.transitionName = 'slide-left'
      }else{
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

<style scoped>
  .foot{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .container{
    padding-bottom: 6rem;
    height: calc(100% - 6rem);
    overflow-x: hidden
  }
</style>
