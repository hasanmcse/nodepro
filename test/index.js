var  http = require('http');
var server = http.createServer( (req,res) => {
if(req.url=="/contact"){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write('<h1>This is contact Page!</h1>')
        res.end();
    }
});
server.listen(3000);
