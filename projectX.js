const fs = require('fs')

const xlsx = require('node-xlsx')

const xml =[]
const xmlProcess = []
const workSheetsFromFile = xlsx.parse(`${__dirname}`+"/eSocial"+`/${process.env.NODE_ENV}.xlsx`);
// console.log(workSheetsFromFile[0].data.slice(1, workSheetsFromFile[0].data.length))
workSheetsFromFile[0].data.slice(1, workSheetsFromFile[0].data.length).forEach(e => {
  xml.push(e[0])
  xmlProcess.push(e[1])
})

console.log("LENGTH ----------------->",workSheetsFromFile[0].data.length)

xml.forEach((e,i)=>  fs.writeFile(__dirname +'/xml'+ `/xml${i}.xml`, e +"", ()=>{ }))
xmlProcess.forEach((e,i)=>  fs.writeFile(__dirname +'/xml'+ `/xmlProcess${i}.xml`, e+"", ()=>{}))
console.log("Finish")
