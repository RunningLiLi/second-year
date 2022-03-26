import fetch from 'node-fetch';
function myaxios(config){
    const {url='',method=''}=config
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method,
        }).then((res)=>{
            resolve(res)
        })
    })
}
myaxios({
    url:"http://127.0.0.1:8080",
    method:'GET'   
})
