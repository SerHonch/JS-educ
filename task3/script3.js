// trim()
function myTrim(text){
    let start = 0;
    let end = 0;
    let buf= '';
    for(let i = 0; i < text.length ;i++) {
        if(text[i] != ' ') {
            start = i;
            break;
        }
    }
    for(let i = text.length; i > 0  ;i--) {
        if(text[i-1] != ' ' && text[i] != undefined) {
            end = i;
            break;
        }
    }
    for(let i = start; i < end; i++) {
        buf += text[i];
    }
    return buf;
}
console.log(myTrim('    Hello World!') === 'Hello World!');
console.log(myTrim('    Hello World!      ') === 'Hello World!');
console.log(myTrim('Hello World!      ') === 'Hello World!');
// console.log(myTrim() === '');
// console.log(myTrim('    jojo   ') === 'jojo');
// console.log(myTrim(2) === '2');
// console.log(myTrim(true) === 'true');
// console.log(myTrim([]) === '[Hello World!]');
// console.log(myTrim({}) === '{Hello World!}');
// console.log(myTrim(undefined) === 'undefined');
// console.log(myTrim(null) === 'null');
// console.log(myTrim(NaN) === 'NaN');