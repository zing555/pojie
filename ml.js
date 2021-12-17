/*
陌聊直播截图和录屏检测

^https:\/\/aa.iibb.com\/app\/getVideoScreenshotStatus.html

QX MITM = aa.iibb.com

*/

var obj = JSON.parse($response.body);
    obj.m_strMessage = "PayNe带你看直播",
    obj.m_istatus = 0,
    
 
$done({body: JSON.stringify(obj)});




