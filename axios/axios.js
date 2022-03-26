
import xmlhttpRequest from 'xmlhttprequest';
const XMLHttpRequest= xmlhttpRequest.XMLHttpRequest;
function myaxios(config){
    return new Promise((resolve) => {
        const {url='',method=''} = config; 
        const xhr = new XMLHttpRequest;    
        xhr.open(method,url,true); 
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                resolve(xhr.responseText);
            }
        }
        xhr.send();
    })
}
myaxios({
    url:"http://127.0.0.1:8080",
    method:'GET'   
})
