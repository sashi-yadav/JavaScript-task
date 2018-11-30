function removeElement(myArr,element){
    var i=myArr.indexOf(element);
    myArr.splice(i,1);
    return myArr;
}
console.log(removeElement([2, 5, 9, 6], 5));