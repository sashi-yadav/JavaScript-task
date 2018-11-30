function first(myArr,num){
    var  i = myArr.length;
    if(num > i)
    {
        return myArr;
    }
    else if(num<0)
    {
        return [];
    }
    else if(num>0)
    {
        return myArr.slice(0,num);
    }
    else
    return myArr.slice(0,1);
}
console.log(first([7, 9, 0, -2],-3));