const fs = require('fs');

// fs.writeFile('demo1.txt',   ' My name is Taifa.', (err) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('success');
//     }
// })


// appendfile
fs.appendFile('demo1.txt',   ' I am  8 years .', (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('success');
    }
})

//for readFile
// fs.readFile('demo1.txt', 'utf-8',(err, data) =>{
//     if(err){
//         console.log('err');
//     }else{
//         console.log(data);
//     }
// })

//for rename
// fs.rename('demo1.txt', 'demo2.txt',(err) =>{
//     if(err){
//         console.log('err');
//     }else{
//         console.log('successful');
//     }
// })

//for exist
// fs.exists('demo2.txt',(result) =>{
//     if(result){
//         console.log('found');
//     }else{
//         console.log('not found');
//     }
// })

//for delete or unlike
// fs.unlink('demo2.txt',(err) =>{
//     if(err){
//         console.log('err');
//     }else{
//         console.log('successfully delete');
//     }
// })


