// includes
let arr = [1,2,3,4,5, 'Hello'];
function myIncludes(arr, search, index = 0){
    for(let i = index; i < arr.length; i++){
        if(arr[i] == search){
            return true;
        }
    }
    return false;
}

console.log(`myIncludes(arr, 2) == arr.includes(2) - ${myIncludes(arr, 2) == arr.includes(2)}`);
console.log(`myIncludes(arr, 'H') == arr.includes('H') - ${myIncludes(arr, 'H') == arr.includes('H')}`);
console.log(`myIncludes(arr, 'Hello') == arr.includes('Hello') - ${myIncludes(arr, 'Hello') == arr.includes('Hello')}`);
console.log(`myIncludes(arr, 'hello') == arr.includes('hello') - ${myIncludes(arr, 'hello') == arr.includes('hello')}`);
console.log(`myIncludes(arr, 'Hello', 5) == arr.includes('Hello', 5) - ${myIncludes(arr, 'Hello', 5) == arr.includes('Hello', 5)}`);
console.log(`myIncludes(arr, 'Hello', 6) == arr.includes('Hello', 6) - ${myIncludes(arr, 'Hello', 6) == arr.includes('Hello', 6)}`);
console.log(`myIncludes(arr, 'Hello', -1) == arr.includes('Hello', -1) - ${myIncludes(arr, 'Hello', -1) == arr.includes('Hello', -1)}`);
console.log(`myIncludes(arr, '') == arr.includes('') - ${myIncludes(arr, '') == arr.includes('')}`);
console.log(`myIncludes(arr) == arr.includes() - ${myIncludes(arr) == arr.includes()}`);