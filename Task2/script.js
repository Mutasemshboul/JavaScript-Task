function CheckNumber(){
    var num = document.getElementById("num").value;
    if(num % 2== 0 ){
        alert("The number is even");
    }
    else{
        alert("The number is odd");
    }
}


function CheckAge(){
   let age =  prompt("Please Enter Your Age: ", );
   if(age>=18){
    document.getElementById("age-result").innerHTML = "You Can watch  movie"
   }
    else{
        document.getElementById("age-result").innerHTML = "You Can't watch  movie"
    }

}




function CheckWeather(){
    let weather =  prompt("Please Enter the Weather: ", );
    if(weather<20){
     document.getElementById("Weather-result").innerHTML = "The wather is cold"
    }
    else if(weather>=20 && weather<=30){
         document.getElementById("Weather-result").innerHTML = "The wather is Hot"
     }
     else{
        document.getElementById("Weather-result").innerHTML = "The wather is Very Hot"

     }
 
 }


 function CheckGrad(){
    let grad =  prompt("Please Enter Your Grad: ", );
    if(grad>=50){
        document.getElementById("Grad-result").innerHTML = "You Passed"
    }
    else{
        document.getElementById("Grad-result").innerHTML = "You Failed"
    }
 }

function CheckLarger(){
    let num1 = parseInt(prompt("Please Enter the First Number: ", ));
    let num2 = parseInt(prompt("Please Enter the Second Number: ", ));
    if(num1>num2){
        document.getElementById("Larger-result").innerHTML = "The Larger Number is " + num1
        }
    else if(num2>num1){
        document.getElementById("Larger-result").innerHTML = "The Larger Number is " + num2
        }
}


function VerifyPass(){
    let pass = prompt("Please Enter Your Password: ", );
    let confirmPass = "mutasem";
    if(pass === confirmPass){
        document.getElementById("Pass-result").innerHTML = "Login successful"

    }
    else{
        document.getElementById("Pass-result").innerHTML = "Incorrect password"
    }
}



function CheckUserNameAndPass(){
    let username = prompt("Please Enter Your Username: ", );
    let password = prompt("Please Enter Your Password: ", );
    let confirmUsername = "mutasem";
    let confirmPassword = "123456";
    if(username === confirmUsername && password === confirmPassword){
        document.getElementById("UsernameAndPass-result").innerHTML = "Login successful"
        }
    else{
        document.getElementById("UsernameAndPass-result").innerHTML = "Incorrect username or password"
        }
}



function CheckAcadimicGrade(){
    let grade = parseInt(prompt("Please Enter Your Grade: ", ));
    if(grade >= 90){
        alert("A");
    }
    else if(grade>=80 && grade <90){
        alert("B");
    }
    else if(grade>=70 && grade <80){
        alert("C");
        }
    else if(grade>=60 && grade <70){
        alert("D");
        }
    else{
        alert("F");
        }
}


function CheckAgeCategory(){
    let age = parseInt(prompt("Please Enter Your Age: ", ));
    if(age < 13){
        alert("Child");
        }
    else if(age >= 13 && age < 20){
        alert("Teenager");
        }
    else{
        alert("Adult");
    }



}


function CheckMembership(){
    let membership = prompt("Please Enter Your Membership Type (Basic, Silver, Gold): ");
    if(membership === "Basic"){
        alert("Access to basic content");
    }
    else if(membership === "Silver"){
        alert("Access  and silver content");
        }
    else if(membership === "Gold"){
        alert("Access to all content");
        }

}