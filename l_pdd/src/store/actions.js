import {
  getHomeCasual,
  getHomeNav,
  getDressNav,
  getBoxNav,
  getBabyNav,
  getFoodNav,
  getGeneralNav,
  getPhoneNav,
  getManNav,
  getEleNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods,
  getUserInfo,
  getLogOut,
  getCartsGoods,
} from '../api'

import {
  HOME_CASUAL,
  HOME_NAV,
  DRESS_NAV,
  BOX_NAV,
  BABY_NAV,
  GENERAL_NAV,
  FOOD_NAV,
  PHONE_NAV,
  MAN_NAV,
  ELE_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  CART_SHOP_LIST,
  ADD_SHOP_COUNT,
  REDUCE_SHOP_COUNT,
  SELECTED_ALL_GOODS,
  SELECTED_SINGER_GOODS,
  DEL_SINGER_GOODS,
} from './mutation-types'

export default {
  // 1. 获取首页的轮播图
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message})
  },

  // 2. 获取首页的导航
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_NAV, {homenav: result.message.data})
  },

  // 2.1 获取服饰的导航
  async reqDressNav({commit}) {
    const result = await getDressNav();
    commit(DRESS_NAV, {dressnav: result.message.data})
  },

  // 2.2 获取鞋包的导航
  async reqBoxNav({commit}) {
    const result = await getBoxNav();
    commit(BOX_NAV, {boxnav: result.message.data})
  },

  // 2.3 获取母婴的导航
  async reqBabyNav({commit}) {
    const result = await getBabyNav();
    commit(BABY_NAV, {babynav: result.message.data})
  },

  // 2.4 获取百货的导航
  async reqGeneralNav({commit}) {
    const result = await getGeneralNav();
    commit(GENERAL_NAV, {generalnav: result.message.data})
  },

  // 2.5 获取食品的导航
  async reqFoodNav({commit}) {
    const result = await getFoodNav();
    commit(FOOD_NAV, {foodnav: result.message.data})
  },

  // 2.6 获取手机的导航
  async reqPhoneNav({commit}) {
    const result = await getPhoneNav();
    commit(PHONE_NAV, {phonenav: result.message.data})
  },

  // 2.7 获取运动的导航
  async reqManNav({commit}) {
    const result = await getManNav();
    commit(MAN_NAV, {mannav: result.message.data})
  },

  // 2.8 获取运动的导航
  async reqEleNav({commit}) {
    const result = await getEleNav();
    commit(ELE_NAV, {elenav: result.message.data})
  },

  // 3. 获取首页的商品列表
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST, {homeshoplist: result.message.goods_list})
  },

  // 4. 获取推荐的商品数据
  async reqRecommendShopList({commit}, params) {

    const result = await getRecommendShopList(params);
    commit(RECOMMEND_SHOP_LIST, {recommendshoplist: result.message});
    params.callback && params.callback();
  },

  // 5. 获取推荐的商品数据
  async reqSearchGoods({commit}, callback) {
    const result = await getSearchGoods();
    commit(SEARCH_GOODS, {searchgoods: result.message.data});
    callback && callback();
  },

  //6.同步用户的信息
  syncUserInfo({commit},userInfo){
    commit(USER_INFO,{userInfo});
  },

  //7.异步获取用户信息
  async getUserInfo({commit}) {
    const result = await getUserInfo();
    console.log(result);
    if (result.success_code === 200) {
      commit(USER_INFO, {userInfo: result.message});
    }
  },

  //8.异步获取用户信息
  async logout({commit}) {
    const result = await getLogOut();
    console.log(result);
    if (result.success_code === 200) {
      commit(RESET_USER_INFO);
    }
  },

  // 9. 请求购物车数据
  async reqCartsGoods({commit}) {
    const result = await getCartsGoods();
    if (result.success_code === 200){
      commit(CART_SHOP_LIST, {cartgoods: result.message})
    }
  },

  // 10.单个商品的增加和减少
  updateGoodsCount({commit},{goods,isAdd}) {
    if (isAdd){ //增加
      commit(ADD_SHOP_COUNT,{goods});
    }else { //减少
      commit(REDUCE_SHOP_COUNT,{goods});
    }
  },

  //11.是否选中所有的商品
  selectedAll({commit},{isSelected}){
    commit(SELECTED_ALL_GOODS,{isSelected});
  },

  //12.单个商品的选中和取消
  singerGoodsSelected({commit},{goods}){
    commit(SELECTED_SINGER_GOODS,{goods});
  },

  //13单个商品的删除
  delGoodsSinger({commit},{goods}){
    commit(DEL_SINGER_GOODS,{goods});
  }
}
