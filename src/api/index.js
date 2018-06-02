import axios from '../axios';
import qs from 'querystring';

class Api {
  constructor() {
    this.baseUrl = '';
  }

  /**
   * 搜索公司名，获取匹配公司位置列表
   * 
   * @param {any} company_name 
   * @memberof Api
   */
  async getAddressList(company_name) {
    const params = qs.querystring({
      company_name
    });

    const url = `${this.baseUrl}/search-by-name?${params}`;

    const res = await axios.get(url);

    return res;
  }

  /**
   * 点击公司位置，获取房源评论列表
   * 
   * @param {any} {
   *     company_id,
   *     offset,
   *     limit
   *   } 
   * @memberof Api
   */
  async getComments({
    company_id,
    offset,
    limit
  }) {
    const params = qs.querystring({
      company_id,
      offset,
      limit
    });

    const url = `${this.baseUrl}/search-by-company-id?${params}`;

    const res = await axios.get(url);

    return res;
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
    const url = `${this.baseUrl}/comment`;

    const res = await axios.post(url, {
      uid,
      cid,
      village,
      how_go,
      how_long,
      is_clean,
      has_food,
      has_mall,
      description
    });

    return res;
  }


}

export default new Api();
