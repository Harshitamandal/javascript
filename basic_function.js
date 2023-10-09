// function syntax:
function first(){
    console.log('hello world!')
}

first();

//anonymous function expression and performing an operation:

//second(3,5)
let second = function (a,b){
    return a*b;
}

console.log(second(2,7));

//if we call before function in anonymoous function/arrow function, it will shows error i.e. reference error:cant access efore initialization.


//arrow function:
// third();
let third = () =>{
    console.log('its an arrow function!')
}

third();

function fourth(){
    let start = 0;
    for(value of arguments){
        start += value;

    }
    return start;
}
console.log(fourth(1,6,3,7,5,3));

let fifth=function(){
    return arguments;
}

console.log(fifth(1,6,4,3,'hey'));


//rest operator:
function sixth(...abc){
    console.log(abc);
    
}

sixth(2,6,3,2,6,3);

function seventh(...add){
    let initial = 0;
    for(sum of add){
        initial += sum;
    }
    return initial;
}

console.log(seventh(2,5,2,6,3,3));


        //WORKSHEET OF FUNCTION IN JAVASCRIPT:-

// Problem 1:
// Create a function that calculates the area of a rectangle. The rectangle has a length of 5
// units and a width of 3 units. Write a JavaScript function to find the area of this rectangle.

//solution1:

function areaOfRect(l,b){
    return l*b;
}
console.log(areaOfRect(5,3));

//solution2: + sign were missing in last line
function addNumbers(a, b) {
    return a + b; }
    var result = addNumbers(5, 7);
    console.log("The result is: " + result);
    

// solution 3 - 1
// solution 4 - 3
// solution 5 - 3
// soltuion 6 - 2

// Problem 7:
// You have an array of test scores, and you want to calculate the average score. Write a
// JavaScript function to calculate and return the average of the scores.
// const testScores = [85, 90, 78, 92, 88];

//solution:
const score = [85, 90, 78, 92, 88];

function testScore([...score]){
    let first=0;
    for(cal of score){
        first += cal;
    }
    return first/2;
}

console.log(testScore(score))








// Problem 8:
// You have a list of student scores, and you want to assign letter grades based on the scores.
// Write a JavaScript function that takes a score as input and returns the corresponding letter
// grade.
// ● If your score is 90 or higher, you get an 'A.'
// ● If your score is between 80 and 89, you get a 'B.'
// ● If your score is between 70 and 79, you get a 'C.'
// ● If your score is between 60 and 69, you get a 'D.'
// ● If your score is lower than 60, you get an 'F,' which means you didn't do very well.
// const studentScore = 78;

//solution:
function scoreGrade(marks){
    if(marks>90){
        console.log('A')
    }else if(marks>80&&marks<89){
        console.log('B')
    }else if(marks>70&&marks<79){
        console.log('C')
    }else if(marks>60&&marks<69){
        console.log('D')
    }else{
        console.log('F')
    }

}

scoreGrade(78);

//solution 9:)sign is missing in line 9 after "if (isEven(num)" this word
    


