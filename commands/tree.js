const fs = require("fs")
const path = require("path")

function treeFunction(srcPath){
    let baseName=path.basename(srcPath);
    console.log(baseName);
    console.log("\n\t"+"└──");
    let content=fs.readdirSync(srcPath);
    let allEntities="";
    for(let i=0;i<content.length;i++){
        allEntities+='\n\t'+"├──"+content[i];
        // console.log(content[i]);
    }
    console.log(allEntities);
}

module.exports={
    treeFn:treeFunction
}