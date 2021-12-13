/*

作者伟人q55749353

Quantumult X 脚本:

[rewrite_local]

#酷我音乐🎵
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=2
^https?:\/\/.*kuwo.*(/AdService/kaiping/adinfo|/vip/v2/user/vip).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/QuantumultX-weiren/main/kw.js

MITM = vip1.kuwo.cn
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/AdService/kaiping/';
const p2 = '/vip/v2/user/vip';

//开屏广告
 if (url.indexOf(p1) != -1) {
	obj = {};
	body = JSON.stringify(obj);
}
//会员修改
 if (url.indexOf(p2) != -1) {	
	obj.data.luxAutoPayUser = "2";
	obj.data.vipLuxuryExpire = "32493834549000";	
	obj.data.isYearUser = "2";
	obj.data.vipmExpire = "32493834549000";
	obj.data.vipOverSeasExpire = "32493834549000";
	obj.data.vipExpire = "32493834549000";
	obj.data.vip3Expire = "32493834549000";
	obj.data.experienceExpire = "32493834549000"
body = JSON.stringify(obj);
}

$done({body});


