<template>
  <div class="me-setting">
    <div>
      <me-common-cell left-icon="itlike-2" left-title="免密码支付"/>
      <me-common-cell left-icon="itlike-3" left-title="免拼单设置" :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-1" left-title="消息接收设置" right-title="接收" right-title-color="red"/>
    </div>

    <div style="margin-top: 10px">
      <me-common-cell left-icon="itlike-4" left-title="免密码支付" :clickCell="dealCellClick"/>
      <me-common-cell left-icon="itlike-6" left-title="免密码支付"/>
    </div>

    <div style="margin-top: 10px">
      <me-common-cell left-icon="itlike-1" left-title="免密码支付"/>
    </div>

    <div class="logout" @click="dealLogout">退出</div>
  </div>

</template>

<script>
  import MeCommonCell from './MeCommonCell'
  import {Toast,MessageBox } from 'mint-ui'
  import {mapActions} from 'vuex'

  export default {
    name: "MeSetting",
    components:{
      MeCommonCell,
    },
    methods:{
      ...mapActions(['logout']),
      dealCellClick(props){
        Toast('点击了'+props);
      },

      dealLogout() {
        // console.error(111);
        MessageBox.confirm('您确定退出吗?').then(action => {
          // console.log(action);
          if ('confirm' === action) {
            this.logout({});
            // 回到主界面
            this.$router.replace('/home');
          }
        });
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .logout
    width 100%
    height 44px
    margin-top 10px
    display flex
    justify-content center
    align-items center
    background-color: #fff
</style>
