function array_range(start,length){
	var arr=[];
	for(var i=0 ; i < length ; i++)
	{
		arr[i]=start;
        start++;
	}
    return arr;
}
console.log(array_range(2,5));