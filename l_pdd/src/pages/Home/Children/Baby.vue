<template>
  <div class="Dress">
    <div class="Dress-nav-content" v-if="babynav.length > 0">
      <div class="Dress-content-inner">
        <a class="inner-item" v-for="(baby,index) in babynav" :key="index">
          <img :src="baby.iconurl" alt="">
          <span>{{baby.icontitle}}</span>
        </a>
      </div>
    </div>
    <div class="box-nav">
      <img src="./../imgs/navphoto/04.jpeg" alt="">
    </div>
    <HotShopList/>
    <TabBar/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HotShopList from './Hot/HotShopList'
  import TabBar from './../../../components/TabBar/TabBar'
  export default {
    name: "Baby",
    computed:{
      ...mapState(['babynav']),
    },
    components:{
      HotShopList,
      TabBar
    },
    mounted(){
      // 2.请求服饰导航的数据
      this.$store.dispatch('reqBabyNav');
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .Dress
    width 100%
    height 180px
    position relative
    background-color #fff
    padding-bottom 10px
    padding-top 46px
    .Dress-nav-content
      width 100%
      .Dress-content-inner
        width 100%
        height 180px
        display flex
        flex-wrap wrap
        justify-content center
        align-items center
        .inner-item
          width 70px
          height 80px
          display flex
          flex-direction column
          justify-content center
          align-items center
          font-size 14px
          color #666666
          img
            width 60%
            margin-bottom 5px
    .box-nav
      img
        width: 100%
</style>
