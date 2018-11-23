const Crawler = require('crawler');
const fs = require('fs');

var c = new Crawler({
    maxConnections: 100,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            return console.log(error);
        }else{
            // let json = _.compact(temme(res.body, `[class] td@{a[href=$url]{$text}};`));

            // fs.appendFileSync('region.json', JSON.stringify(json));

            // _.forEach(json, item => getRegion(item.url));
            var $ = res.$;
            for (var i = 0; i < $("a").length; i++) {
            	console.log($("a")[i].attribs.href);
            }
        }

        done();
    }

});

getRegion('index.html');

function getRegion(url) {
    const baseUrl = 'https://www.he.10086.cn/service/';

    c.queue(`${baseUrl}${url}`);
}
