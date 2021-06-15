module.exports = function convert(path) {
  const fs = require("fs")
  const text = fs.readFileSync(path, "utf-8")

  let array = text.split("\n")
  let dataArray = [];
  for(let i = 0; i< array.length; i++){
    if(array[i] == ''){continue}
    let tempArray = []
    tempArray = array[i].split(" ");
    dataArray.push(tempArray)
  };
  let json = {};
  let c = 1;
  dataArray.forEach( (line) =>{
    let tempjson = {
      Date: line[0],
      Time: line[1],
      description: line.slice(2).join(" ")
    };
    json[`Log ${c}`] = tempjson;
    c++
  });
  return json
}