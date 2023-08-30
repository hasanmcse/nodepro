var http = require('http');
var fs = require('fs');
//var URL = require('url');

 var server = http.createServer(function(req, res){
//     //====== URL module
//     var myURL = "http://rabbil.com/blog.html?year=2020&month=july";

//     var myURLobj =URL.parse(myURL, true);

//     var myHostName = myURLobj.host;
//     var myPathName = myURLobj.path;
//     var mySearchName = myURLobj.search;

//     res.writeHead(200,{'content-type':'text/html'});
//     res.write(myPathName);
//     res.end();
// ======  server create and display page
    if(req.url=="/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is about page!</h1>')
        res.end();
    }
    // else if(req.url=="/about"){
    //     res.writeHead(200, {'content-type':'text/html'})
    //     res.write("<h1>This is about page</h1>")
    //     res.end();
    // }
    // else if(req.url=="/contact"){
    //     res.writeHead(200, {'content-type':'text/html'})
    //     res.write("<h1>This is contact page</h1>")
    //     res.end();
    // }


})

server.listen(4040);
console.log('Server run successfully');