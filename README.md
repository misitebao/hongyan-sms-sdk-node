# 宏衍短信 hongyansms

## 客户接口说明

* 短信接口增加JSON格式，增加传递参数rt=json，表示按json格式返回数据。

## 目录

### [1. 发送短信接口](#1)

* #### [1.1 请求 URL](#1.1)
* #### [1.2 请求头](#1.2)
* #### [1.3 请求参数说明](#1.3)
* #### [1.4 请求参数示例](#1.4)
* #### [1.5 返回参数说明](#1.5)
* #### [1.6 返回参数示例](#1.6)

### [2. 余额及已发送量查询接口](#2)

* #### [2.1 请求 URL](#2.1)
* #### [2.2 请求头](#2.2)
* #### [2.3 请求参数说明](#2.3)
* #### [2.4 请求参数示例](#2.4)
* #### [2.5 返回参数说明](#2.5)
* #### [2.6 返回参数示例](#2.6)

### [3. 非法关键词查询](#3)

* #### [3.1 请求 URL](#3.1)
* #### [3.2 请求头](#3.2)
* #### [3.3 请求参数说明](#3.3)
* #### [3.4 请求参数示例](#3.4)
* #### [3.5 返回参数说明](#3.5)
* #### [3.6 返回参数示例](#3.6)

### [4. 状态报告接口](#4)

* #### [4.1 请求 URL](#4.1)
* #### [4.2 请求头](#4.2)
* #### [4.3 请求参数说明](#4.3)
* #### [4.4 请求参数示例](#4.4)
* #### [4.5 返回参数说明](#4.5)
* #### [4.6 返回参数示例](#4.6)

### [5. 上行接口](#5)

* #### [5.1 请求 URL](#5.1)
* #### [5.2 请求头](#5.2)
* #### [5.3 请求参数说明](#5.3)
* #### [5.4 请求参数示例](#5.4)
* #### [5.5 返回参数说明](#5.5)
* #### [5.6 返回参数示例](#5.6)

## 官方 HTTP 接口

<h3 id="1">1. 发送短信接口</h3>
<h4 id="1.1">1.1 请求 URL</h4>
<table align="center">	

    <tr>		
        <th>URL类型</th>		
        <th>根地址</th>		
    </tr>	
    <tr>		
        <td>UTF-8</td>		
        <td>http://sms10692.com/v2sms.aspx</td>		
    </tr>	
    <tr>		
        <td>GB2312</td>		
        <td>http://sms10692.com/v2smsGBK.aspx</td>	
    </tr>	
    <tr>		
        <th>请求方式</th>		
        <td colspan="2">POST</td>	
    </tr>	

</table>

<h4 id="1.2">1.2 请求头</h4>
<table align="center">

        <tr>
            <th>请求头名称</th>
            <th>说明</th>
            <th>值</th>
        </tr>
        <!-- <tr>
            <td>Content-Type</td>
            <td>表单类型</td>
            <td>application/x-www-form-urlencoded</td>
        </tr> -->

</table>

<h4 id="1.3">1.3 请求参数说明</h4>
<table align="center">

    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>是否必须</th>
        <th>值-示例</th>
        <th>解释说明</th>
    </tr>
    <tr>
        <td>userid</td>
        <td>int</td>
        <td>是</td>
        <td>123456</td>
        <td>企业ID</td>
    </tr>
    <tr>
        <td>timestamp</td>
        <td>string</td>
        <td>是</td>
        <td>"1569227749245"</td>
        <td>系统当时间戳</td>
    </tr>
    <tr>
        <td>sign</td>
        <td>string</td>
        <td>是</td>
        <td>"1569227749245"</td>
        <td>使用 账号+密码+时间戳</br>生成MD5字符串作为签名</br>MD5生成32位，且需要小写</td>
    </tr>
    <tr>
        <td>mobile</td>
        <td>string</td>
        <td>是</td>
        <td>"13888888888,13988858555"</td>
        <td>发信发送的目的号码.多个号码之间用半角逗号隔开</td>
    </tr>
    <tr>
        <td>content</td>
        <td>string</td>
        <td>是</td>
        <td>"【宏衍】这是测试短信"</td>
        <td>发送短信的内容，内容需要UTF-8编码</td>
    </tr>
    <tr>
        <td>sendTime</td>
        <td>string</td>
        <td>否</td>
        <td>"2010-10-24 09:08:10"</td>
        <td>定时发送时间，为空表示立即发送</td>
    </tr>
    <tr>
        <td>action</td>
        <td>string</td>
        <td>否</td>
        <td>"send"</td>
        <td>发送任务命令，设置为固定的:send</td>
    </tr>
    <tr>
        <td>extno</td>
        <td>string</td>
        <td>否</td>
        <td>"12345"</td>
        <td>扩展子号，请先询问配置的通道是否支持扩展子号，如果不支持，请填空。子号只能为数字，且最多10位数。</td>
    </tr>

</table>

<h4 id="1.4">1.4 请求参数示例</h4>

``` javascript
{
    "userid": "123456",
    "timestamp": "1569227749245",
    "sign": "1569227749245",
    "mobile": "13888888888,13988858555",
    "content": "【宏衍】这是测试短信",
    "sendTime": "2010-10-24 09:08:10",
    "action": "send",
    "extno": "12345",
}
```

<h4 id="1.5">1.5 返回参数说明</h4>
<h4 id="1.6">1.6 返回参数示例</h4>

<h3 id="2">2. 余额及已发送量查询接口</h3>
<h4 id="2.1">2.1 请求 URL</h4>
<h4 id="2.2">2.2 请求头</h4>
<h4 id="2.3">2.3 请求参数说明</h4>
<h4 id="2.4">2.4 请求参数示例</h4>
<h4 id="2.5">2.5 返回参数说明</h4>
<h4 id="2.6">2.6 返回参数示例</h4>

<h3 id="3">3. 非法关键词查询</h3>
<h4 id="3.1">3.1 请求 URL</h4>
<h4 id="3.2">3.2 请求头</h4>
<h4 id="3.3">3.3 请求参数说明</h4>
<h4 id="3.4">3.4 请求参数示例</h4>
<h4 id="3.5">3.5 返回参数说明</h4>
<h4 id="3.6">3.6 返回参数示例</h4>

<h3 id="4">4. 状态报告接口</h3>
<h4 id="4.1">4.1 请求 URL</h4>
<h4 id="4.2">4.2 请求头</h4>
<h4 id="4.3">4.3 请求参数说明</h4>
<h4 id="4.4">4.4 请求参数示例</h4>
<h4 id="4.5">4.5 返回参数说明</h4>
<h4 id="4.6">4.6 返回参数示例</h4>

<h3 id="5">5. 上行接口</h3>
<h4 id="5.1">5.1 请求 URL</h4>
<h4 id="5.2">5.2 请求头</h4>
<h4 id="5.3">5.3 请求参数说明</h4>
<h4 id="5.4">5.4 请求参数示例</h4>
<h4 id="5.5">5.5 返回参数说明</h4>
<h4 id="5.6">5.6 返回参数示例</h4>

## SDK

* ### [node-sdk](./node-sdk)

## 使用说明

``` javascript
    // 1.引入模块
    const HYSms = require('hongyansms')
    const hysms = new HYSms({
        userid,
        username,
        userpwd
    })

    // 1.1 发送短信
    hysms.sendMessage({
        mobile,
        message,
        senTime
    }).then(res => {
        console.log(res.text)
    })

    // 1.2 余额及已发送量查询
    hysms.sendMessage({}).then(res => {
        console.log(res.text)
    })

    // 1.3 非法关键词查询
    hysms.sendMessage({
        message
    }).then(res => {
        console.log(res.text)
    })

    // 1.4 状态报告接口
    hysms.sendMessage({}).then(res => {
        console.log(res.text)
    })

    // 1.5 用户上行数据获取
    hysms.sendMessage({}).then(res => {
        console.log(res.text)
    })
```
