var fs = require('fs');
var http = require('http');


var server = http.createServer((req,res)=>{
//===== readFile Asynchronous and Synchronous
//==== Async
    // if(req.url=="/"){
    //      fs.readFile('index.html', function(error,data){
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.write(data)
    //         res.end();
    //      });
// ==== Sync
    // if(req.url=="/"){
    //     var myData = fs.readFileSync('index.html')
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write(myData)
    //     res.end();
    //     }

//======= writeFile Asynchronous and synchronous 
//========= Async
if(req.url=="/"){
         fs.writeFile('demo.html','Hello World wellcome to bangladesh', function(error){
            if(error){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('file write  error')
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('file create successfully')
                res.end();
            }
         });
// =======  Sync
    //  var error = fs.writeFileSync('demoSync.txt',' Wellcome to My Country')
    //      if(error){
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.write('file write error')
    //         res.end()
    //      }else{
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.write('file write success with sync')
    //         res.end()
    //      }

     //   }

//======= rename File Asynchronous and synchronous
// ===== Async
    // if(req.url=="/"){
    //     fs.rename('demo.html','demoNew.html',function(error){
    //         if(error){
    //             res.writeHead(200,{'Content-Type':'text/html'})
    //             res.write('file rename error')
    //             res.end()
    //         }else{
    //             res.writeHead(200,{'Content-Type':'text/html'})
    //             res.write('file rename success')
    //             res.end()
    //         }
    //     })
    // }
// ==== Sync
    // if(req.url=="/"){
    //     let error = fs.renameSync('demoSync.txt','demoSyncNew.txt' )
    //         if(error){
    //             res.writeHead(200,{'Content-Type':'text/html'})
    //             res.write('sync file rename error')
    //             res.end()
    //         }else{
    //             res.writeHead(200,{'Content-Type':'text/html'})
    //             res.write('sync file rename success')
    //             res.end()
    //         }
    
    // }

})

server.listen(4040);
console.log('Server run success');