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
		alert("21");
		break;
	default:
		alert("Other");
}
//Ifの代わりに
var j = {'20':1,'21':2}[i]||0;
alert(j);

var num = 25

switch (true) {
	case num <= 0:
		alert("Less than or equal0")
		break;
	case num > 0 && num <= 25:
		alert("between 0 ~ 25");
	    break
	default:
		alert("more than 25");
		break;
}
