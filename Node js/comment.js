/**
 * 客户端发送请求
 */

var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
	'content': 'Jason Cz',
	'cid': 348
});

var options = {
	hostname: 'localhost',
	port: 9000,
	path: '/paas/flow/queryFlowList.action',
	query: 'page=1&rows=10&searchKey=&sidx=updateTime&sord',
	method: 'GET',
	headers: {
		'Accept':'application/json, text/plain, */*',
		'Accept-Encoding':'gzip, deflate, br',
		'Accept-Language':'zh-CN,zh;q=0.9,en;q=0.8',
		'Cache-Control':'no-cache',
		'Connection':'keep-alive',
		'Cookie':'JSESSIONID=04B7906E92D6E14EDCDF62BC101C7C6A',
		'Host':'localhost:9000',
		'Pragma':'no-cache',
		'Referer':'http://localhost:9000/',
		'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36'
	}
}


var req = http.request(options, function (res) {
	console.log('status:' + res.status.Code);
	console.log(JSON.stringify(res.headers));

	res.on('data', function (chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk)
	});

	res.on('end', function () {
		console.log('请求结束');
	});
})	

req.on('error', function (e) {
	console.log('error: '+ e.message);
});

req.write(postData);

req.end();
