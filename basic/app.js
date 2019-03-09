var msg = 'Hello World';
console.log(msg);

//list
var list = new Array();
for(var i=0; i<5; i++){
    list.push(i);
}

//find position and insert
var it = list.indexOf(3);
list.splice(it, 0, 10);
for(var i=0, len = list.length; i<len; i++){
    console.log(list[i]);
}

//foreach (bad performance)
var map = new Map();
list.forEach(function(i){
    map.set(i, 'a');
});

//map loop
for (var [key, value] of map) {
  console.log('result %s : %d', value, key);
}

var csv = "world,peace";
//substring
var sub = csv.substr(0, 4);
console.log(sub);

//split
var arr = csv.split(',');
arr.forEach(function(i){
    console.log(i);
});