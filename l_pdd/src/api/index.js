import ajax from './ajax'

// 1. 基础路径
const BASE_URL = '/api';

// 2. 请求方法

// 2.1 请求首页的轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');

// 2.2 请求首页的导航
export const getHomeNav = ()=>ajax(BASE_URL + '/api/homenav');

// 2.2.1 请求服饰的导航
export const getDressNav = ()=>ajax(BASE_URL + '/api/dressnav');

// 2.2.2 请求鞋包的导航
export const getBoxNav = ()=>ajax(BASE_URL + '/api/boxnav');

// 2.2.3 请求鞋包的导航
export const getBabyNav = ()=>ajax(BASE_URL + '/api/babynav');

// 2.2.4 请求百货的导航
export const getGeneralNav = ()=>ajax(BASE_URL + '/api/generalnav');

// 2.2.5 请求食品的导航
export const getFoodNav = ()=>ajax(BASE_URL + '/api/foodnav');

// 2.2.6 请求手机的导航
export const getPhoneNav = ()=>ajax(BASE_URL + '/api/phonenav');

// 2.2.7 请求运动的导航
export const getManNav = ()=>ajax(BASE_URL + '/api/mannav');

// 2.2.8 请求电器的导航
export const getEleNav = ()=>ajax(BASE_URL + '/api/elenav');


// 2.3 请求首页的商品数据
export const getHomeShopList = ()=>ajax(BASE_URL + '/api/homeshoplist');

// 2.4 请求推荐的商品数据
export const getRecommendShopList = (params)=>ajax(BASE_URL + '/api/recommendshoplist', params);

// 2.5 请求搜索的列表数据
export const getSearchGoods = ()=>ajax(BASE_URL + '/api/searchgoods');

// 2.6 请求短信验证码
export const getPhoneCode = (phone)=>ajax(BASE_URL + '/api/send_code',{phone});

// 2.7 请求短信验证码
export const phoneCodeLogin = (phone,code)=>ajax(BASE_URL + '/api/login_code',{phone,code},'POST');

// 2.8 用户名和密码登录
export const pwdLogin = (name, pwd, captcha)=>ajax(BASE_URL + '/api/login_pwd', {name, pwd, captcha}, 'POST');

// 2.9 获取登录的用户信息
export const getUserInfo = ()=>ajax(BASE_URL + '/api/user_info');

//2.10 退出登录
export const getLogOut = ()=>ajax(BASE_URL + '/api/logout');

// 2.11 修改用户信息
export const changeUserInfo = (user_id, user_name, user_sex, user_address, user_birthday, user_sign) => ajax(BASE_URL + '/api/change_user_msg', {
  user_id,
  user_name,
  user_sex,
  user_address,
  user_birthday,
  user_sign
}, 'POST');

// 2.12 加入购物车
export const addGoodsToCart = (user_id, goods_id, goods_name, thumb_url, price) => ajax(BASE_URL + '/api/add_shop_cart', {user_id, goods_id, goods_name, thumb_url, price}, 'POST');

//2.13 请求购物车的数据
export const getCartsGoods = ()=>ajax(BASE_URL + '/api/cart_goods');
