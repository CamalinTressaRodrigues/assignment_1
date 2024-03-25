// QUESTION 4

// Write a JavaScript program to find the sum of squares of the elements of an array.


function SumSqEle(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
            sum += array[i] ** 2;
    }
    console.log(" Sum of Squares of elements in array is " + sum);
}

let array = [8, 6, 4, 2, 3];
// let array = prompt("Enter the elements of array separated by commas:").split(',').map(Number);
SumSqEle(array);