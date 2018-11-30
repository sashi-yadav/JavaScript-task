function emptyArray(myArr){
	var i; 
	var len=myArr.length;
	for(i = 0; i < len; i++)
	{
		myArr.pop();
	}
	return myArr;
}
var arr=[1,2,3,4];
console.log(emptyArray(arr));