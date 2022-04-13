const { compilation } = require("webpack");
const fs=require('fs');
const pluginName="consolePlugin";
const exec = require('child_process').exec;
class consolePlugin{
    apply(compiler){
        compiler.hooks.run.tap(pluginName,compilation=>{
            exec('git log', function(error, stdout, stderr){
                if(error) {
                    console.error('error: ' + error);
                    return;
                }
                fs.writeFile('./bulid/README.md',stdout+'stderr: ' + typeof stderr,()=>{consolePlugin.log("写入成功！")})
            });
           
        })
    }
}
module.exports=consolePlugin;
