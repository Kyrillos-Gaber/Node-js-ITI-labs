const fs = require('fs');

let objArr = [
  {name: "c++", val: 100}
]

read();

switch (process.argv[2]) {
  case "add":
    add(process.argv[3], process.argv[4]);
    break;

  case "edit":
    edit(process.argv[3], process.argv[4], process.argv[5]);
    break;

  case "del":
    delet(process.argv[3]);
    break;

    case "sum":
      sum();
      break;

  default:
    console.log("Error,see help");
    break;
}

save();

function save() {
  let data = JSON.stringify(objArr);
  fs.writeFileSync("std.txt", data);

}

function read() {
  objArr = JSON.parse(fs.readFileSync("std.txt", "utf-8"));
}

function add(nameVal, value) {
  objArr.push( { name: nameVal, val: value } );
}

function edit(index, nameVal, value) {
  objArr[index].name = nameVal;
  objArr[index].val = value;
}

function delet(index) {
  objArr.splice(index, 1);
}

function sum(){
  let sum = 0;
  for (let i = 0; i < objArr.length; i++) 
    sum +=parseInt( objArr[i].val);
  console.log(sum);
}
