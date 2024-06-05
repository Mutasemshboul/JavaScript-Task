function calc() {
    const op = document.getElementById('op').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    var reult ;
    if(op == "+"){
        reult = num1+num2;
    }
    if(op == "-"){
        reult = num1-num2;
    }
    if(op == "*"){
        reult = num1*num2;
    }
    if(op == "/"){
        reult = num1/num2;
    }
    else{
        reult ="Invalid Opreation";
    }
    
    document.getElementById("result").innerHTML = reult;
  }





  function calcGrade() {
    const mark = parseInt(document.getElementById('mark').value);
    let grade = 50;

    if (mark < 50) {
        grade = 'FAIL';
    } else if (mark >= 50 && mark <= 59) {
        grade = 'D';
    } else if (mark >= 60 && mark <= 69) {
        grade = 'C';
    } else if (mark >= 70 && mark <= 79) {
        grade = 'B';
    } else if (mark >= 80 && mark <= 89) {
        grade = 'A';
    } else if (mark >= 90 && mark <= 100) {
        grade = 'A+';
    } else {
        grade = 'Invalid mark'; 
    }

    document.getElementById('grade').innerHTML = grade;


 
}


function piFunc(){
    const π = 3.14
    var result = π*2
    document.getElementById('pi').innerHTML = result;

}


function welcomeFunc(){
    let x = 10;
    let y = 30;
    let result ;

    if(x>y){
        result=document.getElementById('welcome').innerHTML = "Hello World";
    }
    else{
        result=document.getElementById('welcome').innerHTML = "GoodBye";
    }
    alert(result)
    console.log(result)

}