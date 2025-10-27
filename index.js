let automobiles = ['car', 'truck', 'motorcycle'];
let automobiles.push('airplane', 'skateboard');
let automobiles.unshift('bike', 'helicopter');

let automobilesCopy = automobiles;
let automobiles.pop('helicopter');
let automobiles.shift('bike');




document.getElementById("result").innerHTML = automobiles;

