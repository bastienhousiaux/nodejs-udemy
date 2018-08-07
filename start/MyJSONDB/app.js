const JSONDB=require("./JSONDB.js");

var db=new JSONDB("testdb");

model=db.createModel("fruit",["couleur","poids"]);
console.log(db.models);
model.create({couleur:"vert",poids:5});
console.log(db.db);
db.saveDB();