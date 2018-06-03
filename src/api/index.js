import axios from '../axios';
import qs from 'querystring';
import store from '../store'

class Api {
    constructor() {
        this.baseUrl = 'http://jushuo.anycodes.cn';
        this.uid = store.state.uid;
    }

    /**
     * 搜索公司名，获取匹配公司位置列表
     * 
     * @param {any} company_name 
     * @memberof Api
     */
    async getAddressList(company_name) {
        const params = qs.stringify({
            company_name
        });

        const url = `${this.baseUrl}/companys/search-by-name?${params}&openid=${this.uid}`;

        const res = await axios.get(url);

        return res.data;
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
        poi,
        title,
        address,
        category,
        offset,
        limit
    }) {
        const params = qs.stringify({
            poi,
            title,
            address,
            category,
            offset,
            limit
        });
        const url = `${this.baseUrl}/comments/search-by-poi?${params}`;

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
        const url = `${this.baseUrl}/companys/comment`;

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

    /**
     * 获取合租信息列表
     * 
     * @param {any} {
     *   } 
     * @memberof Api
     */
    async getRents({

    }) {
        console.log('request')
        const url = `${this.baseUrl}/getjoin?openid=${this.uid}`;

        const res = await axios.get(url);

        return res.data;
    }

    /**
     * 发布合租信息：填写表单
     * 
     * @param {any} {
     *     contacts:1,
     *     price_low,
     *     price_high,
     *     is_clean,
     *     adopt_pet,
     *     sleep_at,
     *     hobby,
     *     publish_at,
     *     description,
     *     remark
     *   } 
     * @memberof Api
     */
    async publishRent({
        contacts,
        price_low,
        price_high,
        is_clean,
        adopt_pet,
        sleep_at,
        hobby,
        publish_at,
        description,
        remark
    }) {
        const params = qs.stringify({
            contacts,
            price_low,
            price_high,
            is_clean,
            adopt_pet,
            sleep_at,
            hobby,
            publish_at,
            description,
            remark
        });

        const url = `${this.baseUrl}/addjoin?openid=${this.uid}&${params}`;

        const res = await axios.get(url);

        return res;
    }

    /**
     * 与他人合租：填写表单
     * 
     * @param {any} {
     *     opration,
     *     jid,
     *     uid,
     *     request,
     *   } 
     * @memberof Api
     */
    async contact({
        opration,
        jid,
        request
    }) {
        const url = `${this.baseUrl}/contact`,
            uid = `${this.uid}`

        const res = await axios.post(url, {
            opration,
            jid,
            uid,
            request
        });

        return res;
    }


}

export default new Api();