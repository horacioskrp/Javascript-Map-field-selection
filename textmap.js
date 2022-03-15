const fs = require("fs");

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));


const refact = data.map((ent) => {return { 
    subject : ent.Subject,
    periode : ent.Period,
    status : ent.STATUS}});
console.log(refact);