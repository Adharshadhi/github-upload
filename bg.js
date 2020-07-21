var colors = [];


var bdychange = document.querySelector("body");
var btnchange = document.querySelector("button");


function randomColor(){

    var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}	

btnchange.addEventListener("click", function(){
	colors.push(randomColor());

	for(i=0 ; i < colors.length ; i++)
	{	
	   bdychange.style.backgroundColor = colors[i];
    }

});










