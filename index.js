let automobiles = ['car', 'truck', 'motorcycle'];
automobiles.push('airplane', 'skateboard');
automobiles.unshift('bike', 'helicopter');

let automobilesCopy = automobiles;
automobiles.pop('helicopter');
automobiles.shift('bike');




document.getElementById("result").innerHTML = automobiles;


