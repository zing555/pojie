/*



[rewrite_local]

^https:\/\/mobile\.ximalaya\.com\/mobile-user\/v2\/homePage.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/QuantumultX-weiren/main/ximalaya.js

[mitm]
hostname= *xima*

*/
var obj = JSON.parse($response.body);
obj.data.nickname = "伟人破解";
obj.data.isVip = true;
obj.data.vipExpireTime = 32493834549000;
obj.data.vipStatus = 2;
obj.data.vipLevel = 5;
obj.data.anchorVipInfo.isVip = true;
obj.data.vipInfo.isVip = true;
obj.data.vipInfo.level = 5;
obj.data.mobileLargeLogo = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
obj.data.mobileSmallLogo = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
obj.data.mobileMiddleLogo = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";

$done({
    body: JSON.stringify(obj)
});
