function myReverse(arr){
    let elem = [];
    for(let i = arr.length - 1; i >=0 ; i--){
        elem.push(arr[i]);
    }
    for(let i = 0; i < arr.length; i++){
        arr[i] = elem[i];
    }
    return arr;
}
let arr = [1,2,3,4,5, 'Hello'];
console.log(`myReverse(arr) == arr.reverse() - ${myReverse(arr) == arr.reverse()}`);
console.log(`myReverse(arr) == arr.reverse() - ${myReverse(arr) == arr.reverse()}`);
console.log(`myReverse(arr) == arr.reverse() - ${myReverse(arr) == arr.reverse()}`);
console.log(`myReverse(arr) == arr.reverse() - ${myReverse(arr) == arr.reverse()}`);