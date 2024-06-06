
//Task 1: BMI Calculator
function BMICalculator(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let BMI = weight / (Math.pow(height,2));
    if(BMI < 18.5){
        document.getElementById("BMI-result").innerHTML ="Your BMI is "+ BMI+ " Underweight";
    }
    else if(BMI >= 18.5 && BMI <=24.9){
        document.getElementById("BMI-result").innerHTML ="Your BMI is "+ BMI+  " Normal weight";
    }
    else if(BMI >= 25 && BMI <=29.9){
        document.getElementById("BMI-result").innerHTML ="Your BMI is "+ BMI+  " Overweight";
    }
    else{
        document.getElementById("BMI-result").innerHTML ="Your BMI is "+ BMI+  " Obese";
    }

}


//Task 2: Leap Year Checker
function LeapYearChecker(){
    let year =prompt("Please Enter a year: ",);
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                document.getElementById("leap-year-result").innerHTML = year + " is a leap year";
                }
            else{
                document.getElementById("leap-year-result").innerHTML = year + " is not a leap year";

                    }
            }
        else{
            document.getElementById("leap-year-result").innerHTML = year + " is a leap year";
        }
    }
    else{
        document.getElementById("leap-year-result").innerHTML = year + " is not a leap year";
    }
}


//Task 3: Grade Classification with Bonus

function GradClassification(){
    let score = prompt("Please Enter your score",)
    if(score>=80){
        if(confirm("Do you finish your all tasks ?")){
            score+=5;
        }
    }

    if(score >= 90){
        alert("A");
    }
    else if(score>=80 && score <90){
        alert("B");
    }
    else if(score>=70 && score <80){
        alert("C");
        }
    else if(score>=60 && score <70){
        alert("D");
        }
    else{
        alert("F");
        }


}

//Task 4: Number Comparison with Nested Conditions

function NumberComparison(){
    
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    let num3 = parseInt(prompt("Enter third number:"));
    var largestNubmer = num1 ;
    var statusOfTheNumber;
    if(num1>num2){
        if(num1>num3){
            largestNubmer = num1;
            }
        else{
            largestNubmer = num3;
            }
    }
    else{
        if(num2>num3){
            largestNubmer = num2;
            }
        else{
            largestNubmer = num3;
            }
        }

        if(largestNubmer>0){
            statusOfTheNumber = "Positive";
        }
        else if(largestNubmer<0){
            statusOfTheNumber = "Negative";
            }
        else{
            statusOfTheNumber = "Zero";

        }
        
        alert("The largest number is " + largestNubmer+" and the number is "+statusOfTheNumber);
                            

    }


// Task 5: ATM Withdrawal Simulation

function ATM(){
    let currentBalance = parseFloat(prompt("Enter your current balance: "));
    let withdrawalAmount = parseFloat(prompt("Enter the amount you want to withdraw: "));

    if (withdrawalAmount > 0 && withdrawalAmount <= currentBalance) {
        currentBalance -= withdrawalAmount;
        alert("Your balance now is: "+currentBalance);
    } else {
        alert("Please try again, Invalid withdrawal amount. ");
    }

}

//Task 6: Temperature Conversion

function TemperatureConversion(){
    let temperature = parseFloat(prompt("Enter the temperature in Celsius: "));
    let fahrenheit = (temperature * 9/5) + 32;

    if(temperature <= 0){
        alert("Temperature is below freezing ,The degree in fahrenheit is : "+fahrenheit);
    }
    else if( temperature >100){
        alert("Temperature is above boiling ,The degree in fahrenheit is : "+fahrenheit);
    }
    else{
        alert(" Temperature is normal The degree in fahrenheit is : "+fahrenheit);
    }
    

}


//Task 7: Shopping Cart Discount

function CartDiscount(){
    let totalAmount = parseFloat(prompt("Enter the total amount of your shopping cart: "));
    let discount = 0;
    if(totalAmount>=100 && totalAmount < 200){
        discount = totalAmount * 0.10;
    }
    else if(totalAmount >= 200){
        discount= totalAmount * 0.20;
    }

    let totalAmountAfterDiscount = (totalAmount - discount);
    alert("Your total amount after discount is: "+ totalAmountAfterDiscount);
}

//Task 8: Password Strength Checker

function isSpecialChar(element) {
    if (typeof element !== 'string' || element.length !== 1) {
      return false; 
    }
    const code = element.charCodeAt(0);
    return !((code > 47 && code < 58) ||  
             (code > 64 && code < 91) ||  
             (code > 96 && code < 123));  
  }
  
function PasswordStrengthChecker(){
    let password = prompt("Enter your password: ");
    let passwordLength = password.length;
    let hasNumber = false;
    let hasSpecialChar = false;
    let Strength;
    for(let i = 0; i < passwordLength; i++){
        if(!isNaN(password[i])){
            hasNumber = true;
        }
        if(isSpecialChar(password[i])){
            hasSpecialChar = true;
        }
    }
    if(passwordLength < 8){
        Strength = "Weak";
        }
    else if(passwordLength >= 8 && hasNumber && hasSpecialChar){
        Strength = "Strong";
        }
    else{
        Strength = "Medium";
        }
    alert("Your password strength is: "+ Strength);
}


function SimpleCalculator(){
   
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let operator = prompt("Enter an arithmetic operator (+, -, *, /): ");
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        if (num2 !== 0) {
        result = num1 / num2;
    } 
        else {
            alert("Error: Division by zero is not allowed.");
            result = undefined;
        }
    } 

    if (result !== undefined) {
    alert('The result is: '+result);
    }
    
}

function LibraryBookLoan (){
    let userType = prompt("Enter your user type (student, teacher): ");

    let numBooks = parseInt(prompt("Enter the number of books you want to borrow: "));

    let loanApproved;
    if (userType === "student") {
        if (numBooks <= 3) {
            loanApproved = true;
        } 
        else {
            loanApproved = false;
        }
    } 
    else if (userType === "teacher") {
        if (numBooks <= 5) {
            loanApproved = true;
    } 
    else {
        loanApproved = false;
    }
}
    if (loanApproved !== undefined) {
        if (loanApproved) {
            alert(`Your loan of ${numBooks} books is approved.`);
        } else {
            alert(`Sorry, you can not borrow books`);
        }
    }
}


function checkVotingEligibility() {
    let age = parseInt(prompt("Enter your age:"));
    let nationality = prompt("Enter your nationality:");
    if (age >= 18 && nationality.toLowerCase() === "american") {
        alert("You are eligible to vote.");
    } else {
        alert("You are not eligible to vote.");
    }
}


function temperatureAlert() {
    let temperature = parseInt(prompt("Enter the temperature in Celsius:"));
    if (temperature < 0) {
        alert("Very Cold");
    } else if (temperature >= 0 && temperature <= 15) {
        alert("Cold");
    } else if (temperature > 15 && temperature <= 25) {
        alert("Warm");
    } else {
        alert("Hot");
    }
}


function movieTicketPricing() {
    let age = parseInt(prompt("Enter your age:"));
    let movieType = prompt("Enter the type of movie (Regular, 3D):");
    let price = 15;
    if (age < 12) {
        price -= 2; 
    }
    if (movieType === "3D") {
        price += 4; 
    }
    alert("The ticket price is: $" + price);
}


function restaurantOrder() {
    let order = prompt("What would you like to order? (Pizza, Pasta, Salad)");
    let quantity = parseInt(prompt("How many items?"));
    let prices = { Pizza: 10, Pasta: 8, Salad: 7 };
    let total = prices[order] * quantity;
    if (quantity > 1) {
        total *= 0.1; 
    }
    alert("Your final price is: $" + total);
}


function gradeEvaluation() {
    let subject1 = parseInt(prompt("Enter your grade for the first subject:"));
    let subject2 = parseInt(prompt("Enter your grade for the second subject:"));
    let subject3 = parseInt(prompt("Enter your grade for the third subject:"));
    let average = (subject1 + subject2 + subject3) / 3;
    if (average >= 60) {
        alert("Average: " + average+ " You pass");
    } else {
        alert("Average: " + average + " You fail");
    }
}


function userLogin() {
    let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");
    let myUsername = "mutasem";
    let myPassword = "mutasem123";
    if (username === myUsername ) {
        if(password === myPassword){
            alert("Login successful");
        }
        else {
            alert("Incorrect username or password");
        }
    } 
    else {
        alert("Incorrect username or password");
    }
}



function trafficLightSimulator() {
    let lightColor = prompt("Enter the current color of the traffic light (Red, Yellow, Green):").toLowerCase();
    if (lightColor === "red") {
        alert("Stop");
    } else if (lightColor === "yellow") {
        alert("Slow down");
    } else if (lightColor === "green") {
        alert("Go");
    } else {
        alert("Invalid color");
    }
}



function dayOfTheWeek() {
    let dayNumber = parseInt(prompt("Enter a number from 1 to 7 representing the days of the week:"));
    let days = {1: "Monday",2: "Tuesday",3: "Wednesday",4: "Thursday",5: "Friday",6: "Saturday",7: "Sunday"};
    if (dayNumber >= 1 && dayNumber <= 7) {
        alert("The day of the week is: " + days[dayNumber]);
    } else {
        alert("Invalid number, please enter a number from 1 to 7.");
    }
}



function hotelRoomBooking() {
    let roomType = prompt("Enter the type of room (Single, Double, Suite):");
    let nights = parseInt(prompt("Number of nights you want to stay?"));
    let prices = { "Single": 30, "Double": 44, "Suite": 210 };
    let totalCost = prices[roomType] * nights;
    alert("The total cost for your stay is: $" + totalCanadaFederalTax(totalCost));
}


function multiplicationTableGenerator() {
    let number = parseInt(prompt("Enter a number:"));
    if (number > 0) {
        alert("Multiplication table for: " + number);
        for (let i = 1; i <= 10; i++) {
            console.log(number + " * " + i + " = " + (number * i));
        }
    }
}