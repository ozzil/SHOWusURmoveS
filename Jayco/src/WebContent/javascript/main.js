/**
 *初回テスト
 *
 */
document.write("hello world");

var i = 21;

switch(i){
	case 20:
	 break;
	case 21:
		console.dir("21");
		break;
	default:
		console.dir("Other");
}
//Ifの代わりに
var j = {'20':1,'21':2}[i]||0;
console.dir(j);

var num = 25

switch (true) {
	case num <= 0:
		console.dir("Less than or equal0")
		break;
	case num > 0 && num <= 25:
		console.dir("between 0 ~ 25");
	    break
	default:
		console.dir("more than 25");
		break;
}

//パラメータ活用
function paramAdd() {
	if(arguments.length == 1){
		console.dir(arguments[0] + 10);
	} else if(arguments.length == 2){
		console.dir(arguments[0] + arguments[1]);

	}
}
paramAdd(10);
paramAdd(30, 20);


function doAdd(num0, num1){

	arguments[1] = 10;
	// 10 + NaN = NaN
	console.dir(arguments[0] + num1);

}
doAdd(10);


function setName(obj){

	obj.name = "Nico";
	obj =new Object();
	obj.name = "Tony";
}
 var person = new Object();
 setName(person)
 console.dir(person.name);


 var color = "blue";
 function changeColor(){
	 if(color === "blue"){
		 color = "red";
	 }else{
		 color = "black";
	 }
 }

 changeColor();
 console.dir(color);

//
 function displayInfo(args){
	 var output = "";

	 if (typeof args.name == "string"){
		 output += "Name:" + args.name + "\n";
	 }
	 if (typeof args.age == "number"){
		 output += "Age:" + args.age + "\n";
	 }
	 console.dir(output);
 }

 displayInfo({
	 name:"nico",
	 age: 30
 })
  displayInfo({
	 name:"Tony"
 })