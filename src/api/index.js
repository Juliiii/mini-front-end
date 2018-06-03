import axios from '../axios';
import qs from 'querystring';
import store from '../store';

class Api {
  constructor() {
    this.baseUrl = 'http://jushuo.anycodes.cn';
  }

  /**
   * 搜索公司名，获取匹配公司位置列表
   *
   * @param {any} company_name
   * @memberof Api
   */
  async getAddressList (company_name) {
    const params = qs.stringify({
      company_name,
      openid: store.state.uid
    });

    const url = `${this.baseUrl}/companys/search-by-name?${params}`;

    const res = await axios.get(url);

    return res.data;
  }

  /**
   * 点击公司位置，获取房源评论列表
   *
   * @param {any} {
   * @memberof Api
   */
  async getComments ({
    poi,
    page
  }) {
    const params = qs.stringify({
      poi,
      page,
      openid: store.state.uid
    });
    const url = `${this.baseUrl}/companys/search-by-poi?${params}`;

    const res = await axios.get(url);

    return res.data;
  }

  /**
   * 评论公司周边房源：填写表单
   * 
   * @param {any} {
   *     uid,
   *     cid,
   *     village,
   *     how_go,
   *     how_long,
   *     is_clean,
   *     has_food,
   *     has_mall,
   *     description
   *   } 
   * @memberof Api
   */
  async publishComments ({
    uid,
    cid,
    village,
    how_go,
    how_long,
    is_clean,
    has_food,
    has_mall,
    description
  }) {
    const params = qs.stringify({
      openid: store.state.uid,
      cid,
      village,
      how_go,
      how_long,
      is_clean,
      has_food,
      has_mall,
      description
    });
    const url = `${this.baseUrl}/comment?${params}`;
    const res = await axios.get(url);

    return res;
  }

  /**
   * 数据总览
   *
   * @memberof Api
   */
  async getMainData({cid}) {
    const params = qs.stringify({
      poi: cid,
      openid: store.state.uid
    });

    const url = `${this.baseUrl}/maindata?${params}`;

    const res = await axios.get(url);
    return res.data;
  }

  /**
   * 获取当前用户信息
   * 
   * @param {any} user_id 
   * @returns 
   * @memberof Api
   */
  async getUserInfo () {
    const param = qs.stringify({
      openid: store.state.uid
    });

    const url = `${this.baseUrl}/userinfor?${param}`;

    const res = await axios.get(url);
    return res.data;
  }

  /**
   * 获取合租请求列表
   * 
   * @param {any} {
   *     user_id,
   *     offset,
   *     limit
   *   }
   * @returns
   * @memberof Api
   */
  async getContactReqs ({
    user_id,
    offset,
    limit
  }) {
    const params = qs.stringify({
      user_id,
      offset,
      limit
    });

    const url = `${this.baseUrl}/contacts?${params}`;

    const res = await axios.get(url);

    return res.data;
  }

  /**
   * 同意或拒绝合租
   *
   * @param {any} {
   *       contact_id
   *     }
   * @param {any} {
   *       accept_status
   *     }
   * @memberof Api
   */
  async resContactReq (
    {
      contact_id
    },
    {
      accept_status
    }) {
    const url = `${this.baseUrl}/contact/${contact_id}`;

    const body = {
      operation: 2,
      accept_status
    };

    await axios.post(url, body);
  }

  /**
   * 获取uid
   *
   * @returns
   * @memberof Api
   */
  async getUid () {
    const url = `${this.baseUrl}/user/info`;

    const res = await axios.get(url);

    return res.data;
  }
}

export default new Api();
