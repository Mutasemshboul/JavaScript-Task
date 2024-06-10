function tellFortune(job,location, partner,numOfChildren ){

    console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${numOfChildren} kids.`)
}
tellFortune('software engineer', 'Jordan', 'Alice', 3);


function calculateDogAge(age ){
    let dogAge = age * 7 ;
    console.log(`Your dog is ${dogAge} years old in dog years.`)
}
calculateDogAge(1);



function calculateSupply(age,amount){
    let maxAge = 100;
    let totalAmount = amount * 365;
    let yearsLeft = maxAge - age ;
    let dailyAmount =yearsLeft*totalAmount;
    console.log(`You will need ${dailyAmount} cups of coffee to last you until the ripe`)
    
}
calculateSupply(30,3);


function greet(name){
    return `Hello ${name}`

}
console.log(greet("Adam"))




/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

we should declare the x varible 

function double(7) {
  return 2 * 7;
}
we can't put intger value as a parameter 


function double('7') {
  return 2 * 'x';
}

we can't put string value as a parameter 
*/


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

func double1(x) {
  return 2 * x ;
}
-----------------
func double1(x) {
  return 2 * x ;
}

function double1(x) {
    return 2 * x ;
  }
-----------------------
functiondouble2 x)
return 2 * x;
}

function double2 (x){
return 2 * x;
}

------------------
function (x) double3 {
  return 2 * x;

function  double3(x) {
  return 2 * x;  
}

*/

/* ---------7--------- */

function cube(num){
    return num * num * num;
}
console.log(cube(4));


/* ---------8--------- */

function multiply(num1,num2){
    return num1 * num2;
}
console.log(multiply(4,3));
console.log(multiply(5,4));

/* ---------9--------- */
 function canIGetADrivingLicense(age){
    if(age >= 20){
        return "Yes, you can ";
        } 
    else {
        return `please come back after ${20-age} years to get one`;
        }
}
console.log(canIGetADrivingLicense(21));
console.log(canIGetADrivingLicense(17));
console.log(canIGetADrivingLicense(20));


/* ---------10--------- */

function sameLength(str1 ,str2){
    if(str1.length === str2.length){
        return true ;
    }
    else {
        return false ;
    }
}
console.log(sameLength("tree","clue"));
console.log(sameLength("tree","car"));

/* ---------11--------- */
function largerNubmer(num1,num2){
    if(num1 > num2){
        return num1 ;
    }
    else {
        return num2 ;
    }
}
console.log(largerNubmer(5,6));
console.log(largerNubmer(5,3));

/* ---------12--------- */

function smallerNubmer(num1,num2,num3){
    if(num1 < num2 && num1 < num3){
        return num1 ;
        }
    else if(num2 < num1 && num2 < num3){
        return num2 ;
        }
    else {
        return num3 ;
        } 
}
console.log(smallerNubmer(8,6,7));
console.log(smallerNubmer(5,99,34));
console.log(smallerNubmer(5,99,3));
console.log(smallerNubmer(5,3,3));


/* ---------13--------- */

function shorterString(str1,str2,str3,str4,str5){
    let shortest = str1;
    if(str2.length < shortest.length){
        shortest = str2 ;
    }
    if(str3.length < shortest.length){
        shortest = str3 ;
    }
    if(str4.length < shortest.length){
        shortest = str4 ;
    }
    if(str5.length < shortest.length){
        shortest = str5 ;
    }
    return shortest ;
}
console.log(shorterString("air","school","car","by","github"));
console.log(shorterString("by","tr","car","air","github"));
console.log(shorterString("air","by","car","school","github"));


/* ---------14--------- */

function longerString(str1,str2,str3,str4){
    let longest = str1;
    if(str2.length > longest.length){
        longest = str2 ;
    }
    if(str3.length > longest.length){
        longest = str3 ;
    }
    if(str4.length > longest.length){
        longest = str4 ;
    }
    return longest ;

}

/* ---------15--------- */
function isEven(num){
    if(num % 2 === 0){
        return true ;
    }
    else{
        return false ;
    }
}

console.log(isEven(1));
console.log(isEven(2));


/* ---------16--------- */

function isOdd(num){
    if(num % 2 !== 0){
        return true ;
    }
    else{
        return false ;
    }
}

console.log(isOdd(4));
console.log(isOdd(5));

/* ---------17--------- */

function positive(num){
    if (num < 0){
        return num * -1;
    }
    return num;
}

console.log(positive(4))
console.log(positive(-5))

/* ---------18--------- */

function fullName(firstName, lastName){
    return firstName + " " + lastName ;
}
console.log(fullName("Adam","McCallen"));
console.log(fullName("Alex", "Mercer"));


/* ---------19--------- */

function average(num1, num2, num3,num4,num5){
    return (num1 + num2 + num3 + num4 + num5) /5;
}

console.log(average(1,2,3,4,5));
console.log(average(5,7,9,3,5));

/* ---------20--------- */

function randomNumber(){
    return Math.random();
}
console.log(randomNumber());
console.log(randomNumber());

/* ---------21--------- */
function randomBetweenNumbers(num1,num2){
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1; 
    }
console.log(randomBetweenNumbers(1,10));


/* ---------22--------- */

function scoreInUniversty(score){
    if(score >= 95 && score <= 100){
        return "A";
    }
    else if(score >= 85 && score <= 94){
        return "B";
    }
    else if(score >= 70 && score <= 84){
        return "C";
    }
    else if(score >= 50 && score <= 69){
        return "D";
    }
    else{
        return "F";
    }
}
console.log(scoreInUniversty(96))
console.log(scoreInUniversty(3))
console.log(scoreInUniversty(71))

/* ---------23--------- */

var ctr = 0
function counter(){

    return ++ctr;
}
console.log(counter());
console.log(counter());
console.log(counter());

/* ---------24--------- */

function resetCounter(){
    ctr = 0;
}
resetCounter();
console.log(counter());
console.log(counter());
console.log(counter());

