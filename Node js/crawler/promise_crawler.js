var http = require('http');
var Promise = require('Promise');
var cheerio = require('cheerio');
var url = 'https://www.imooc.com/video/11551';
var videoIds;

function getPageAsync(url) {
	return Promise(function(resolve, reject) {
		console.log('正在爬取 ' + url);

		 http.get(url, function (res) {
		 	var html = "";

		 	res.on("data", function (data) {
		 		html += data;
		 	});

		 	res.on("end", function () {
		 		// 传递下去
		 		resolve(html);
		 	});
		 }).on("error", function(e) {
		 	reject(e);
		 	console.log('获取数据出错')
		 })

	})
}

var fetchCourseArray = [];

videoIds.forEach(function(id) {
	fetchCourseArray.push(getPageAsync(baseUrl + id));
})

Promise
	.all(fetchCourseArray)
	.then(function(pages) {
		//
	})