/* ---------1--------- */

function birthdateMonth(){
    let month = prompt("Enter your month",);
    let months = {1:"January",
        2:"February",
        3:"March",
        4:"April",
        5:"May",
        6:"June",
        7:"July",
        8:"August",
        9:"September",
        10:"October",
        11:"November",
        12:"December"}
        return months[month];
}

//console.log(birthdateMonth());


/* ---------2--------- */

function loops(){
    let ctr = 1;
    for (let i = 1; i <= 4; i++) {
     let txt = "";
     for (let j = 1; j <= i; j++) {
        txt += ctr + " ";
        ctr++;
    }

    console.log(txt);

}
}

loops()





/* ---------3--------- */
function OneTo1000(){
    for (let i = 1; i <= 1000; i++) {
        if(i%13===0){
            console.log(i);
        }
}

}

/* ---------4--------- */

function multiplication2(num1,num2){
    let ctr = 0;
    for(let i = 0; i < num2;i++){
        ctr += num1;
    }
    return ctr;
}

console.log(multiplication2(5,4));
console.log(multiplication2(2,8));


/* ---------5--------- */

function areaTriangle(base ,height ){
    return (base*0.5)*height;
} 



/* ---------6--------- */

function pandigital(num){
    let str = num.toString();
    var freq = {0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0};
    for(let i = 0; i < str.length; i++){
        freq[Number(str[i])]++; 
    }
    //console.log(freq)
    for(let i = 1; i <= str.length; i++){
        if(freq[i] === 0){
            return false;
        }
        }
        

            return true;
}

console.log(pandigital(90864523148909)); 


/* ---------7--------- */


function DrinkPrice(drink) {
    let priceMessage;

    switch (drink) {
        case 'banana':
            priceMessage = "The price of a banana drink is 20 dollars";
            break;
        case 'apple':
            priceMessage = "The price of an apple drink is 15 dollars";
            break;
        case 'mango':
            priceMessage = "The price of a mango drink is 18 dollars";
            break;
        case 'orange':
            priceMessage = "The price of an orange drink is 12 dollars";
            break;
        case 'pineapple':
            priceMessage = "The price of a pineapple drink is 22 dollars";
            break;
        default:
            priceMessage = "Sorry, we do not have that drink.";
            break;
    }

    console.log(priceMessage);
    
}
DrinkPrice('mango');

/* ---------8--------- */


function fullName(firstName, lastName){
    return firstName + " " + lastName ;
}
console.log(fullName("Adam","McCallen"));
console.log(fullName("Alex", "Mercer"));