/**
 * 
 * hongyansms 模块是宏衍短信接口 Nodejs SDK
 * @module hongyansms
 * @author kuaidjun
 */

const superagent = require('superagent');
const MD5 = require('md5-node')


// 宏衍短信接口类
/**
 * 宏衍短信类
 * @class Hongyansms
 * @constructor
 */
class Hongyansms {
    constructor({
        userid, // 用户id
        username, // 用户名
        userpwd // 用户密码
    }) {
        this.userid = userid
        this.username = username
        this.userpwd = userpwd
    }
    /**
     * 获取时间戳
     * @returns 时间戳
     * @memberof Hongyansms
     */
    getTimestamp() {
        var date = new Date();
        return (date.getFullYear() +
            ('0' + (date.getMonth() + 1)).slice(-2) +
            ('0' + (date.getDate())).slice(-2) +
            ('0' + (date.getHours())).slice(-2) +
            ('0' + (date.getMinutes())).slice(-2) +
            ('0' + (date.getSeconds())).slice(-2))
    }
    /**
     * 1. 发送短信
     * @method sendMessage
     * @param {string} object.mobile 手机号码
     * @param {string} object.message 消息内容
     * @param {string} object.senTime 定时发送时间 （可为空）
     * @return Promise对象
     * @memberof Hongyansms
     */
    sendMessage({
        mobile,
        message,
        senTime
    }) {
        return superagent.post('http://sms10692.com/v2sms.aspx')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                userid: this.userid,
                timestamp: this.getTimestamp(),
                sign: MD5(this.username + this.userpwd + this.getTimestamp()),
                mobile: mobile,
                content: message,
                sendTime: senTime,
                action: 'send',
                extno: '',
                rt: 'json'
            })
    }

    /**
     * 2. 余额及已发送量查询
     * @return Promise对象
     * @memberof Hongyansms
     */
    queryBalance() {
        return superagent.post('http://sms10692.com/v2sms.aspx')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                userid: this.userid,
                timestamp: this.getTimestamp(),
                sign: MD5(this.username + this.userpwd + this.getTimestamp()),
                action: 'overage',
                rt: 'json'
            })
    }
    /**
     * 3. 非法关键词查询
     * @param {string} message 发送消息
     * @return Promise对象
     * @memberof Hongyansms
     */
    queryIllegalKeywords({
        message
    }) {
        return superagent.post('http://sms10692.com/v2sms.aspx')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                userid: this.userid,
                timestamp: this.getTimestamp(),
                sign: MD5(this.username + this.userpwd + this.getTimestamp()),
                action: 'checkkeyword',
                content: message,
                rt: 'json'
            })
    }

    /**
     * 4. 状态报告接口
     * @return Promise对象
     * @memberof Hongyansms
     */
    queryState({ }) {
        return superagent.post('http://sms10692.com/v2statusApi.aspx')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                userid: this.userid,
                timestamp: this.getTimestamp(),
                sign: MD5(this.username + this.userpwd + this.getTimestamp()),
                action: 'query',
                statusNum: 4000,
                rt: 'json'
            })
    }

    /**
     * 5. 用户上行数据获取
     * @returns Promise对象
     * @memberof Hongyansms
     */
    getsUserUplinkData({ }) {
        return superagent.post('http://sms10692.com/v2callApi.aspx')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                userid: this.userid,
                timestamp: this.getTimestamp(),
                sign: MD5(this.username + this.userpwd + this.getTimestamp()),
                action: 'query',
                statusNum: 4000,
                rt: 'json'
            })
    }

    // /**
    //  * 6. 密码修改接口
    //  * @param {*} {
    //  *     }
    //  * @returns Promise对象
    //  * @memberof Hongyansms
    //  */
    // updatePassword({ }) {
    //     return superagent.post('http://sms10692.com/v2statusApi.aspx')
    //         .set('Content-Type', 'application/x-www-form-urlencoded')
    //         .send({
    //             userid: this.userid,
    //             timestamp: this.getTimestamp(),
    //             sign: MD5(this.username + this.userpwd + this.getTimestamp()),
    //             action: 'query',
    //             statusNum: 4000,
    //             rt: 'json'
    //         })
    // }

}
module.exports = Hongyansms