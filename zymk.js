/*
作者伟人q55749353

知音漫客
^http[s]?:\/\/.+.zymk.+(getcomicinfo|getuserinfo|gift_givegifts|v5/addgold|getappadvertise).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/QuantumultX-weiren/main/zymk.js

hostname = *.zymk.cn

*/
 
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/getuserinfo/';
const p2 = '/comic/getcomicinfo';
const p3 = '/gift_givegifts';
const p4 = 'v5/addgold';
const p5 = 'getappadvertise';
//个人页面
if (url.indexOf(p1) != -1) {
    obj.data.Uname = "伟人破解";
    obj.data.isvip = 1;
    obj.data.Uviptime = 32493861699000;
    obj.data.Cgold = 999880;
    obj.data.recommend = 999880;
    obj.data.Cticket = 999880;
    obj.data.Cfans = 999880;
    obj.data.kmh_coins = 999880;
    obj.data.Uid = 55749353;
    obj.data.coins = 999880;
    obj.data.star_coin = 999880;
    obj.data.own_book_num = 999880;
    obj.data.Ulevel = 20;
    obj.data.headpic = "https://image.zymkcdn.com/file/head/015/793/510.jpg";
    body = JSON.stringify(obj);
}
//漫画目录解锁
if (url.indexOf(p2) != -1) {
    for (var i = 0; i < obj.data.chapter_list.length; i++) {
        obj.data.chapter_list[i].price = 0;
        obj.data.chapter_list[i].download_price = 0;
        obj.data.chapter_list[i].is_vip = 0;

    }
    body = JSON.stringify(obj);
}
//打赏
if (url.indexOf(p3) != -1) {
    obj.status = 0;

    body = JSON.stringify(obj);
}
if (url.indexOf(p4) != -1) {
    obj.status = 0;
    obj.data.user_gold = 999880;
    body = JSON.stringify(obj);
}
//去除所有广告
if (url.indexOf(p5) != -1) {
    for (var i = 0; i < obj.data.length; i++) {
        delete obj.data[i].advertise
    }
    body = JSON.stringify(obj);
}



$done({
    body
});
