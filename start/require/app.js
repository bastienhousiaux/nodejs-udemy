console.log("starting app");

const fs=require("fs");
const os=require("os");

//deux manieres


// fs.appendFileSync("myFile.txt","hello world");

// fs.appendFile("myFile2.txt","Hello world",null,(err)=>{
//     if(err)console.log(err);
// })

//ajoute à la suite du fichier existant créé si inexistant

var user=os.userInfo();

console.log(user);