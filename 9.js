function nthLargest(myArray,number){
	myArray.sort();
	return myArray[myArray.length-number]
}
var arr= [1,4,3,6];
console.log(nthLargest(arr,2));