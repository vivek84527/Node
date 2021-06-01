var http=require("http")
http.createServer(function(req,res){
    res.write("hello this is response")
    res.end()
}).listen(2000)