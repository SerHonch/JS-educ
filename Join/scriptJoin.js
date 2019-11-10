join  
let arr = [1,2,3,4,5, 'Hello'];
let free = [];
let arr2 = [1,2,3,undefined,5,null,undefined, 'Hello'];
function myJoin(arr,separator = ','){
    let elem ='';
    for(let i = 0; i < arr.length; i++){
        if( i == arr.length - 1){
            elem += arr[i];
        } else {
            if (arr[i] == undefined || arr[i] == null){
                elem += '' + separator;
            } else {
                elem += arr[i] + separator;
            }
        } 
    }
return elem;
}
console.log(myJoin(arr));
console.log(`myJoin(arr) == arr.join() - ${myJoin(arr) == arr.join()}`);
console.log(`myJoin(arr, '') == arr.join() - ${myJoin(arr,'') == arr.join('')}`);
console.log(`myJoin(arr, ' ') == arr.join() - ${myJoin(arr, ' ') == arr.join(' ')}`);
console.log(`myJoin(free) == free.join() - ${myJoin(free) == free.join()}`);
console.log(`myJoin(free, '') == free.join() - ${myJoin(free,'') == free.join('')}`);
console.log(`myJoin(free, ' ') == free.join() - ${myJoin(free, ' ') == free.join(' ')}`);
console.log(`myJoin(arr2, ' ') == arr2.join() - ${myJoin(arr2, ' ') == arr2.join(' ')}`);
console.log(`myJoin(arr2, '') == arr2.join() - ${myJoin(arr2, '') == arr2.join('')}`);