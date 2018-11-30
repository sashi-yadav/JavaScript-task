function addArray(arr1,arr2){
	var arr=[];
	var a1Length=arr1.length;
	var a2Length=arr2.length;
	if(a1Length == a2Length)
	{
		let len= a1Length
		var i=0;
		for(i = 0; i < len; i++)
		{
			arr[i]=arr1[i]+arr2[i];
		}
	}
	else if(a1Length>a2Length)
	{
		let len = a2Length;
		var i=0;
		for(i = 0; i < len; i++)
		{
			arr[i]=arr1[i]+arr2[i];
		}
		arr = arr .concat(arr1.slice(a2Length));
	}
	else
	{
		let len = a1Length;
		var i=0;
		for(i = 0; i < len; i++)
		{
			arr[i]=arr1[i]+arr2[i];
		}
		arr = arr .concat(arr2.slice(a1Length));
	}
return arr;
}
var arr1=[1,2,3,4];
var arr2=[1,2,3,4,5];
console.log(addArray(arr1,arr2));