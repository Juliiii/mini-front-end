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
  async getAddressList(company_name) {
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
  async getComments({
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
  async publishComments({
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
  async getMainData({ cid }) {
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
  async getUserInfo() {
    const param = qs.stringify({
      openid: store.state.uid
    });

    const url = `${this.baseUrl}/userinfor?${param}`;

    const res = await axios.get(url);
    return res.data;
  }

  /**
   * 修改用户信息
   *
   * @param {*} data
   * @memberof Api
   */
  async changeInfo(data) {
    const param = qs.stringify({
      openid: store.state.uid,
      ...data
    });

    const url = `${this.baseUrl}/change?${param}`;

    const res = await axios.get(url);

    return res;
  }

  /**
   * 获取联系列表
   * 
   * @returns 
   * @memberof Api
   */
  async getContact() {
    const param = qs.stringify({
      openid: store.state.uid
    });

    const url = `${this.baseUrl}/contactcenter?${param}`;

    const res = await axios.get(url);

    return res.data;
  }

  /**
   * 回复联系
   * 
   * @param {any} { id, op } 
   * @memberof Api
   */
  async reContact({ id, op }) {
    const param = qs.stringify({
      id,
      op,
      openid: store.state.uid
    });

    const url = `${this.baseUrl}/recontact?${param}`;

    await axios.get(url);
  }
}

export default new Api();
