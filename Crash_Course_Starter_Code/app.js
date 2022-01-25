// Write your JS in here
//alert("Hello")
var pics = [
	"imgs/Gus 1.jpeg",	//0
	"imgs/Gus 2.jpeg",	//1
	"imgs/Gus 5.jpeg", 	//2
	"imgs/Gus 4.jpeg",	//3
	"imgs/Gus_Lu.jpeg"	//4
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 5){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});