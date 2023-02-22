const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('welcome to home')
        res.end()
    }

    else if(req.url==='/about'){
        res.write('this is about')
        res.end()
    }
    
    else{
        res.end('oops,error')
        
    }
    
    
})
server.listen(5000)