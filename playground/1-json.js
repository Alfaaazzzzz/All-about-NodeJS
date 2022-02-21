const fs = require("fs")

// const book={
//     title:'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const JSONBook=JSON.stringify(book)

// fs.writeFileSync('1-json.json',JSONBook)

// const BufferData= fs.readFileSync('1-json.json')
// const DataJSON= BufferData.toString()
// console.log(DataJSON);
// const data= JSON.parse(DataJSON)
// console.log(data);
// console.log(data.title);

//Task
// old Data= {"name":"Andrew","planet":"Earth","age":27}
const BufferData= fs.readFileSync('1-json.json')
const DataJson= BufferData.toString()
const data= JSON.parse(DataJson)
data.name='Alfaz'
data.age=21
const strData =JSON.stringify(data)
console.log(strData);
fs.writeFileSync('1-json.json',strData)

// new data= {"name":"Alfaz","planet":"Earth","age":21}