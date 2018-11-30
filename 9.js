function nthLargest(myArray,number){
	myArray.sort(function(a,b){return a-b});
	return myArray[myArray.length-number]
}
var arr= [95,21,1,4,3,6,68,72,56,100];
console.log(nthLargest(arr,1));