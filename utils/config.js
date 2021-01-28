/*
 * 
 * 微慕小程序开源版
 * author: jianbo
 * organization: 微慕  www.minapper.com
 * github:    https://github.com/iamxjb/winxin-app-watch-life.net
 * 技术支持微信号：iamxjb
 * 开源协议：MIT
 * Copyright (c) 2017  微慕 https://www.minapper.com All rights reserved.
 */



//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "www.blueskyxn.com";
var WEBSITENAME="苍穹の下"; //网站名称
var PAGECOUNT='8'; //每页文章数目
var ZANIMAGEURL = 'https://ae01.alicdn.com/kf/U34b81aef6f9d4deb8b864fcc45bad02aH.jpg';//微信鼓励的图片链接，用于个人小程序的赞赏
var LOGO = "https://ae01.alicdn.com/kf/U8bf96e4131d747bea5ddc9f26fb57142l.jpg"; // 网站的logo图片
//设置downloadFile合法域名,不带https ,在中括号([])里增加域名，格式：{id=**,domain:'www.**.com'}，用英文逗号分隔。
//此处设置的域名和小程序与小程序后台设置的downloadFile合法域名要一致。
var DOWNLOADFILEDOMAIN = [
    { id: 1, domain: 'www.blueskyxn.com'},
    { id: 2, domain: 'cdn.000714.xyz'},
    { id: 3, domain: 'imgapi.000714.xyz'},
    { id: 4, domain: 'github.com'},
    { id: 5, domain: 'raw.githubusercontent.com'},
    { id: 6, domain: 'cdn.blueskyxn.xyz'},
    { id: 7, domain: 'txcdn.000714.xyz'},
    { id: 8, domain: 'gitee.com'},
    { id: 8, domain: 'ae01.alicdn.com'},
    { id: 9, domain: 'cdn.20000714.xyz'}
    

];
//业务域名，只支持企业主体的小程序
var BUSINESSDOMAIN = [
  { id: 1, domain: 'www.blueskyxn.com'},
  { id: 2, domain: 'cdn.000714.xyz'},
  { id: 3, domain: 'imgapi.000714.xyz'},
  { id: 4, domain: 'github.com'},
  { id: 5, domain: 'raw.githubusercontent.com'},
  { id: 6, domain: 'cdn.blueskyxn.xyz'},
  { id: 7, domain: 'txcdn.000714.xyz'},
  { id: 8, domain: 'gitee.com'},
  { id: 8, domain: 'ae01.alicdn.com'},
  { id: 9, domain: 'cdn.20000714.xyz'}
];
 //首页图标导航
 //参数说明：'name'为名称，'image'为图标路径，'url'为跳转的页面，'redirecttype'为跳转的类型，apppage为本小程序的页面，miniapp为其他微信小程序,webpage为web-view的页面
 //redirecttype 是 miniapp 就是跳转其他小程序  url 为其他小程序的页面
 //redirecttype 为 apppage 就是跳转本小程序的页面，url为本小程序的页面路径
 //redirecttype 为 webpage 是跳转网址，是通过web-view打开网址，url就是你要打开的网址，不过这个网址的域名要是业务域名
 //'appid' 当redirecttype为miniapp时，这个值为其他微信小程序的appid，如果redirecttype为apppage，webpage时，这个值设置为空。
 //'extraData'当redirecttype为miniapp时，这个值为提交到其他微信小程序的参数，如果redirecttype为apppage，webpage时，这个值设置为空。
var INDEXNAV = [
  { id: '1', name: '官网', image: '../../images/uploads/watch-life.png', url: 'https://www.blueskyxn.com', redirecttype: 'webpage', appid: '', extraData: '' },
  { id: '3', name: '排行', image: '../../images/uploads/rankings.jpg', url: '../hot/hot', redirecttype: 'apppage', appid: '', extraData: '' },
  { id: '2', name: '搜索', image: '../../images/uploads/search.jpg', url: '../search/search', redirecttype: 'apppage', appid: '', extraData: '' }
];



export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,  
  getPageCount: PAGECOUNT,
  getIndexNav: INDEXNAV,
  getZanImageUrl: ZANIMAGEURL, 
  getLogo: LOGO,
  getDownloadFileDomain: DOWNLOADFILEDOMAIN,
  getBusinessDomain: BUSINESSDOMAIN
}