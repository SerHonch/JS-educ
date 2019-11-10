//indexOf

function myIndexOf(arr, elem, fromIndex = 0){
    for( let i = fromIndex; i < arr.length; i++) {
        if(elem === arr[i]){
           return i;
            }
        }
        return -1; 
    }
    let arr = [1,2,3,4,5, 'Hello'];
    console.log(myIndexOf(arr, 4));
    console.log(`myIndexOf(arr,6) == arr.indexOf(6) - ${myIndexOf(arr,6) == arr.indexOf(6)}`);
    console.log(`myIndexOf(arr,3) == arr.indexOf(3) - ${myIndexOf(arr,3) == arr.indexOf(3)}`);
    console.log(`myIndexOf(arr) == arr.indexOf() - ${myIndexOf(arr) == arr.indexOf()}`);
    console.log(`myIndexOf(arr,'') == arr.indexOf('') - ${myIndexOf(arr,'') == arr.indexOf('')}`);
    console.log(`myIndexOf(arr,0) == arr.indexOf(0) - ${myIndexOf(arr,0) == arr.indexOf(0)}`);
    console.log(`myIndexOf(arr,'Hello') == arr.indexOf('Hello') - ${myIndexOf(arr,'Hello') == arr.indexOf('Hello')}`);
    console.log(`myIndexOf(arr,3,2) == arr.indexOf(3,2) - ${myIndexOf(arr,3,2) == arr.indexOf(3,2)}`);
    console.log(`myIndexOf(arr, 3,-4) == arr.indexOf(3,-4) - ${myIndexOf(arr,3,-4) == arr.indexOf(3,-4)}`);
    console.log(`myIndexOf(arr, 3,4) == arr.indexOf(3,4) - ${myIndexOf(arr,3,4) == arr.indexOf(3,4)}`);