function nthLargest(myArray,number){
	myArray.sort(function(a,b){return b-a});
	return myArray[number-1]
}
var arr= [95,21,1,4,3,6,68,72,56];
console.log(nthLargest(arr,1));