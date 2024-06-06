function displayMonthDays() {
    let monthNumber = parseInt(prompt("Enter a month number (1-12):"));
    let months = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31};
    if (monthNumber >= 1 && monthNumber <= 12) {
        alert("Month have " + months[monthNumber] + " days");
    }
}



function displayDayName() {
    let dayNumber = parseInt(prompt("Enter a day number (1-7):"));
    let days = {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday",5: "Friday", 6: "Saturday", 7: "Sunday"};
    if (dayNumber >= 1 && dayNumber <= 7) {
        alert(days[dayNumber]);
    }
}



function checkTriangleValidity() {
    let angle1 = parseInt(prompt("Enter first angle:"));
    let angle2 = parseInt(prompt("Enter second angle:"));
    let angle3 = parseInt(prompt("Enter third angle:"));
    let sumOfAngles = angle1 + angle2 + angle3;
    if (sumOfAngles === 180) {
        alert("The triangle is valid.");
    } 
    else {
        alert("The triangle is not valid.");
    }
}


function checkNumberSign() {
    let number = parseInt(prompt("Enter a number:"));
    if (number > 0) {
        alert(number + " is a positive number");
    } 
    else if (number < 0) {
        alert(number + " is a negative number");
    } 
    else {
        alert("The number is zero");
    }
}
