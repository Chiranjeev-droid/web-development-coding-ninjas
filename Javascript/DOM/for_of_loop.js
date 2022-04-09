//for of loop creates a loop to iterate over iterable objects(arrays, strings,hashmaps,etc.)

var arr=[1,2,3,4];

// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }

for(let i of arr){
    console.log(i);
}

//for of not compatible with internet explorer.