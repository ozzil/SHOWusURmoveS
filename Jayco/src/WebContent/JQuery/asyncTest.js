/**
 * aysnc Test
 */
'use strict';
//書き方①
var subject = (function(){
	var dfd = $.Deferred();
	console.log("Todo before done action");
	return dfd;
})();

//observer1
var observer1 = function(content){
	console.log("observer1" + content);
};
//observer2
var observer2 = function(content){
	console.log("observer2" + content);
};
$.when(subject)
.done(observer1)
.done(observer2);
subject.resolve("done");


//書き方②
var dfd = $.Deferred();
var sub = function(dfd){
	//データをこの段階で取り込んで、ObserveActionで使う、非同期実現
	console.log("Todo before done action");
	return dfd;
}
//observer1
var observer1 = function(content){
	console.log("observer1" + content);
};
//observer2
var observer2 = function(content){
	console.log("observer2" + content);
	
};
$.when(sub(dfd))
.done(observer1)
.done(observer2);
dfd.resolve("done")