/**
 * Created by Administrator on 2017/2/26.
 */
var http = require('http');

var fs = require('fs');

http.createServer(function (request, response) {
    new Promise(function (resolve, reject) {
        fs.readFile('./1.txt','utf8', function (err, response) {
            if (err){
                reject();
            }else{
                console.log(response);
                resolve(response);
            }
        });
    }).then(function (res) {
        response.write('1');
        response.write('2');
        response.end('我关闭了');
        console.log(res);
    }).catch(function (err) {
        response.end('我出错了');
    });
    // fs.readFile('./1.txt', function (err, response) {
    //     console.log(response);
    // });
    // response.write('1');
    // response.write('2');
    // response.end('我关闭了');
}).listen(7000);

console.log('server listened on port 7000');