const fs=require("fs");
const fileName="target.txt";

const data=fs.readFileSync(fileName);
console.log(data.toString());

console.log("synchronous programming");