// QUESTION 2

//  Write a JavaScript program to find the most frequent item of an array

function freqItem (arr) {

var count = 1;
var val = 0;
var element;

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[i] == arr[j])
            val++;
        if (count < val) {
            count = val;
            element = arr[i];
        }
    }
    val = 0;
}

console.log("Most frequent element is " +  element );
}

// let array = prompt("Enter the elements of array separated by commas:").split(',').map(Number);

array = [ 
    1, 1, 3, 5, 2, 6, 8, 5, 6, 2, 
    7, 3, 0, 2, 1, 6, 8, 9, 5, 
]; 

freqItem(array)
