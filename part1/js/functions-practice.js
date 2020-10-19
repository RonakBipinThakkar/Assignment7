//STEP 1
function halfNumber(num){
return num/2;
}
var num = 8;
window.console.log("Half of " + num + " is " + halfNumber(num) + ".");

//STEP 2
function squareNumber(num){
return num*num;
}
var num = 3;
window.console.log("The result of squaring the number " + num + " is " + squareNumber(num) + ".");

//STEP 3
function percentOf(num1, num2){
return (num1/num2) * 100;
}
var num1 = 2;
var num2 = 4;
window.console.log(num1 + " is " + percentOf(num1, num2) + "% of "+ num2 +".");

//STEP 4
function findModulus(num1, num2){
return num2%num1;
}
var num1 = 4;
var num2 = 10;
window.console.log(findModulus(num1, num2) + " is the modulus of " + num1 + " and "+ num2 +".");

//STEP 5
function summation(inpArr){
	var summation = 0;
	for (var i = 0; i < inpArr.length; i++) {
		summation += Number(inpArr[i]);
	}
	window.console.log("The sum of the entered numbers " + inpArr + " is " + summation + ".");
	return summation;
}
var inpArr = prompt("Enter numbers for addition seperated by a comma(,).");
inpArr = inpArr.split(",");
summation(inpArr);