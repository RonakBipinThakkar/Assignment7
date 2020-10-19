/*eslint-env browser*/

//STEP 1
function basicButtonClickEvent(){
	alert("I have been clicked");
}

//STEP 2
var button2 = document.getElementById("button2");
button2.onclick = function () {
	alert("I have been clicked");
}

//STEP 3
var button3 = document.getElementById("button3");
button3.addEventListener("click", basicButtonClickEvent);

//STEP 4
var button4 = document.getElementById("button4");
button4.addEventListener("click", function(e){
	alert("I have been clicked");
});

//STEP 5
window.onload = function () {
	var button5 = document.getElementById("button5");
		button5.addEventListener("click", function(e){
			alert("I have been clicked");
	});
}