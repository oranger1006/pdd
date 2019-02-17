import Vue from 'vue'
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
  [HOME_CASUAL](state, {homecasual}) {
    state.homecasual = homecasual;
  },

  [HOME_NAV](state, {homenav}) {
    state.homenav = homenav;
  },

  [DRESS_NAV](state, {dressnav}) {
    state.dressnav = dressnav;
  },

  [BOX_NAV](state, {boxnav}) {
    state.boxnav = boxnav;
  },

  [BABY_NAV](state, {babynav}) {
    state.babynav = babynav;
  },

  [GENERAL_NAV](state, {generalnav}) {
    state.generalnav = generalnav;
  },

  [FOOD_NAV](state, {foodnav}) {
    state.foodnav = foodnav;
  },

  [PHONE_NAV](state, {phonenav}) {
    state.phonenav = phonenav;
  },

  [MAN_NAV](state, {mannav}) {
    state.mannav = mannav;
  },

  [ELE_NAV](state, {elenav}) {
    state.elenav = elenav;
  },

  [HOME_SHOP_LIST](state, {homeshoplist}) {
    state.homeshoplist = homeshoplist;
  },

  [RECOMMEND_SHOP_LIST](state, {recommendshoplist}) {
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist);
  },

  [SEARCH_GOODS](state, {searchgoods}) {
    state.searchgoods = searchgoods;
  },

  [USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo;
  },

  [RESET_USER_INFO](state) {  //不需要提交参数，所以只填state
    state.userInfo = {};
  },

  [CART_SHOP_LIST](state, {cartgoods}) {
    state.cartgoods = cartgoods;
  },

  [ADD_SHOP_COUNT](state, {goods}) {
    goods.buy_count++
  },

  [REDUCE_SHOP_COUNT](state, {goods}) {
    if (goods.buy_count){
      goods.buy_count--;
      if (goods.buy_count ===0){
        const index = state.cartgoods.indexOf(goods);
        state.cartgoods.splice(index,1);
      }
    }
  },

  [SELECTED_ALL_GOODS](state, {isSelected}) {
    state.cartgoods.forEach((goods,index)=>{
      if (goods.checked){ //该属性存在
        goods.checked = !isSelected;
      }else {  //该属性不存在
        Vue.set(goods,'checked',!isSelected);  //如果通过this方法。  $set
      }
    });
  },

  [SELECTED_SINGER_GOODS](state, {goods}) {
    //1.1判断是否有选中的属性
    if (goods.checked){
      goods.checked = !goods.checked;
    } else {
      Vue.set(goods,'checked',true);
    }
  },

  [DEL_SINGER_GOODS](state, {goods}) {
    goods.buy_count = 0;
    const index = state.cartgoods.indexOf(goods);
    state.cartgoods.splice(index,1);
  },
}
