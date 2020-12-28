
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api.m.jd.com/client.action?functionId=search`;
const method = `POST`;
const headers = {
'Cookie' : `pin=XCC3721;wskey=AAJfy5jPAED9jCF4YEboDzfx7rqzkWzrEcWKtHIt2C0GT9Mls1_0adZq-wLmlZIBoBMoXjYrhPM8P7q5w3VG-EVeEsv22Cb8;whwswswws=xfAuvCJmIHIxrfiNzZcnn8GE1/yR7UDBOG/ZNfiuONChjPi0liYYUZiImT5YFsf0ZnYa386ah9pM/q6meumGk5Q==;unionwsws={"jmafinger":"xfAuvCJmIHIxrfiNzZcnn8GE1\/yR7UDBOG\/ZNfiuONChjPi0liYYUZiImT5YFsf0ZnYa386ah9pM\/q6meumGk5Q==","devicefinger":"74P37YOYT4KWHSJMXBB4Y7EWAA3755I4XQIGD4ZJ54GSXR67RNKSXDKJOVYAXWP5M4MZDRROJNMJNIW5G53S2N5IML2GA24LRKUGM2CNCHFVLYDACVGA"}`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `api.m.jd.com`,
'User-Agent' : `JD4iPhone/167490 (iPhone; iOS 14.4; Scale/2.00)`,
'Accept-Language' : `zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8`
};
const body = `area=2_2834_51988_0&body=%7B%22secondInsedCount%22%3A%220%22%2C%22isCorrect%22%3A%221%22%2C%22orignalSelect%22%3A%220%22%2C%22insertedCount%22%3A%220%22%2C%22keyword%22%3A%226800xt%22%2C%22gcLng%22%3A%22121.319031%22%2C%22pagesize%22%3A%2210%22%2C%22frontExpids%22%3A%22F_36%22%2C%22orignalSearch%22%3A%220%22%2C%22stock%22%3A%221%22%2C%22articleEssay%22%3A%221%22%2C%22oneBoxMod%22%3A%221%22%2C%22latitude%22%3A%2231.151221%22%2C%22exposedCount%22%3A%220%22%2C%22newMiddleTag%22%3A%221%22%2C%22imagesize%22%3A%7B%22listImg%22%3A%22264x264%22%2C%22gridImg%22%3A%22394x394%22%2C%22longImg%22%3A%22394x506%22%7D%2C%22deviceidTail%22%3A%2280%22%2C%22addrFilter%22%3A%221%22%2C%22jshop%22%3A%221%22%2C%22insertArticle%22%3A%221%22%2C%22gcLat%22%3A%2231.149321%22%2C%22longitude%22%3A%22121.477521%22%2C%22newVersion%22%3A%223%22%2C%22lastkey%22%3A%22%E8%B4%BA%E5%8D%A1%E5%9C%A3%E8%AF%9E%22%2C%22addressId%22%3A%223595217005%22%2C%22pageEntrance%22%3A%221%22%2C%22page%22%3A%221%22%2C%22price%22%3A%7B%22min%22%3A%220%22%2C%22max%22%3A%226500%22%7D%2C%22expandName%22%3A%7B%22115%22%3A%22144494%22%7D%2C%22insertScene%22%3A%221%22%2C%22showShopTab%22%3A%22yes%22%7D&build=167490&client=apple&clientVersion=9.3.2&d_brand=apple&d_model=iPhone12%2C1&eid=74P37YOYT4KWHSJMXBB4Y7EWAA3755I4XQIGD4ZJ54GSXR67RNKSXDKJOVYAXWP5M4MZDRROJNMJNIW5G53S2N5IML2GA24LRKUGM2CNCHFVLYDACVGA&isBackground=N&joycious=220&lang=zh_CN&networkType=4g&networklibtype=JDNetworkBaseAF&openudid=d6825a7f3143541a93b88835d14c4658b176c8ee&osVersion=14.4&partner=apple&rfs=0000&scope=10&screen=828%2A1792&sign=f25b4a458e0b5cbab3f1fbf41a4d121a&st=1608627911436&sv=120&uts=0f31TVRjBSve0xG8/GZgfaL8PId/TC0NwPLC5q3EBTuSStd9tmyX8X%2BIEx2BUlGFFaK7lFBOFRlGSuE%2Btt1AAXDyX1hhP/YpEYqZQsoRiGYGWMfZWd8Hilhvt/AX6DoHDuxPrz/QOod3gU2iG01V0QORTppz/rUjYwQLRTkXHdLkpxsVaTvl53xfyuYzoefFhdSTDLSRxDbcx0d%2B9UeR8w%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=unknown`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
	var content = JSON.parse(response.body);
	var list = content.wareInfo;
	var filterdList = list.filter(function (info) {
		return info.uet.b_pub.stockstatus != "无货" 
	});
	if (filterdList.length > 0) {
		var obj = filterdList[0]
		$notify(obj.wname, obj.jdPrice, "")
		console.log(JSON.stringify(filterdList));
	} else {
		// $notify("无结果", "未找到满足要求的显卡", "")
		console.log("No Result...")
	}
	// console.log(JSON.stringify(filterdList));
    $done();
}, reason => {
    // console.log(reason.error);
    $done();
});
