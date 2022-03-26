
const http=require("http");
const serve=http.createServer();

serve.on("request",(req,res)=>{
    console.log(1)
})
serve.listen(8080,()=>{
    console.log("8080端口已启动,http://127.0.0.1:8080");
   
})