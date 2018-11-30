function arrayClone(myArr)
{
    var newArr = []
    var i = myArr.length;
    while(i>0)
    {
        newArr = newArr.concat(myArr.shift());
        i--;
    }
    return newArr;
}
var arr = [1,2,3,4,5]
console.log(arrayClone(arr));