// QUESTION 1 

// JavaScript function to get an array and to read the first element of an array and to Check whether it is prime or not. 

function PrimeOrNot(arr) {
    let firstElement = arr[0];

    if (firstElement <= 1) {
        console.log(" Not a Prime as it's less than 2 .");
        return false;
    }

    for (let i = 2; i < firstElement; i++){
        if ((firstElement % i) === 0) {
            console.log(" It's not a Prime number. ");
            return false;
        }
    }
    console.log("It's a Prime number.")
    
}

let array = prompt("Enter the elements of array separated by commas:").split(',').map(Number);

PrimeOrNot(array);