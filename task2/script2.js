// substring()
function mySubstring(str,a,b) {
    let buf = '';
    if (a < b) {
        for(let i = a; i < b; i++) {
        buf += str[i];
        } return buf;
    } else if (a > b) {
        for(let i = b; i < a; i++) {
            buf += str[i];
        } return buf;
    }
}
console.log(mySubstring('Hello World!') === 'Hello World!');
console.log(mySubstring() === '');
console.log(mySubstring('    jojo   ') === 'jojo');
console.log(mySubstring(2) === '2');
console.log(mySubstring(true) === 'true');
console.log(mySubstring([]) === '[Hello World!]');
console.log(mySubstring({}) === '{Hello World!}');
console.log(mySubstring(undefined) === 'undefined');
console.log(mySubstring(null) === 'null');
console.log(mySubstring(NaN) === 'NaN');