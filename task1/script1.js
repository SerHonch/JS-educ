// search()
function mySearch(str,a) {
    let buf = '';
    for (let i = 0; i < str.length ; i++) {
        if( a[0] == str[i]) {
            return i;
            }
        }
    }

console.log(mySearch('Hello World!') === 'Hello World!');
console.log(mySearch() === '');
console.log(mySearch('    jojokock   ') === 'jojo');
console.log(mySearch(2) === '2');
console.log(mySearch(true) === 'true');
console.log(mySearch([]) === '[Hello World!]');
console.log(mySearch({}) === '{Hello World!}');
console.log(mySearch(undefined) === 'undefined');
console.log(mySearch(null) === 'null');
console.log(mySearch(NaN) === 'NaN');