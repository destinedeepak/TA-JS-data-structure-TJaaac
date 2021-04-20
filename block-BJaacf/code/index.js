// 1. Create an array named numbers and store 5 number values in it
let numbers = [
    21,
    28,
    93,
    46,
    95
]

// 2. Calculate the sum of array items and print it to the console using console.log()
var sum =0;
for(let num of numbers){
    sum +=num;
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
var temp = 0 ;
for(let num of numbers){
    temp +=num;
}
console.log(`average: ${temp/numbers.length}`);

// 4. Find the highest number in the array and print it to the console using console.log()
 var highestNum = 0;

for(let num of numbers){
    if(num>highestNum){
        highestNum = num;
    }
}
console.log(`highest number: ${highestNum}`);

// 5. Find the lowest number in the array and print it to the console using console.log()
var lowest = Number.MAX_VALUE;

for(let num of numbers){
    if(lowest > num){
        lowest = num;
    }
}
console.log(`lowest number: ${lowest}`);

// 6. Find the even numbers in the array and print them to the console using console.log()
for(let num of numbers){
    if(num % 2 == 0){
        console.log(`Even Numbers: ${num}`);
    }
}


// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let num of numbers){
    if(num % 2 != 0){
        console.log(`Odd Numbers: ${num}`);
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
var EvenNum = 0;

for(let num of numbers){
    if(num % 5 == 0){
        console.log(`Number divisible by 5 is: ${num}`);
    }
}

// 9. Log all the element of the array one by one
for(let num of numbers){
    console.log(`Elements: ${num}`);
}

// 10. Find all the number in the array that is divisible by 3
for(let num of numbers){
    if(num % 3 == 0){
        console.log(`Number divisible by 3 is: ${num}`);
    }
}
