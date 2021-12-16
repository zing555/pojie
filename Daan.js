/*
作者伟人q55749353


[rewrite_local]

^http[s]?:\/\/.*\/api\/(Usercenter\/getUserInfo|/teacher/getTeacherDetailInfo).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/QuantumultX-weiren/main/Daan.js

[mitm]
hostname= 123.57.195.48
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/getUserInfo';
const p2 = 'TeacherDetailInfo';

//会员破解
if (url.indexOf(p1) != -1) {

    obj.data.is_vip = 2;
    obj.data.username = "伟人破解";
    
    obj.data.avatar = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
    obj.data.vip_expire_date = "2099-12-12";
  
   body = JSON.stringify(obj);
}

//播放
if (url.indexOf(p2) != -1) {
    obj.data.is_vip = 2;
  body = JSON.stringify(obj);
}






$done({body});
