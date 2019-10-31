// repeat()
function myRepeat(str, a){
    let buf ='';
    for (i = 0; i < a; i++) {
     buf += str;
    } return buf ;
}
console.log(myIncludes('Hello World!') === 'Hello World!');
console.log(myIncludes() === '');
console.log(myIncludes('   jojo    ') === 'jojo');
console.log(myIncludes(2) === '2');
console.log(myIncludes(true) === 'true');
console.log(myIncludes([]) === '[Hello World!]');
console.log(myIncludes({}) === '{Hello World!}');
console.log(myIncludes(undefined) === 'undefined');
console.log(myIncludes(null) === 'null');
console.log(myIncludes(NaN) === 'NaN');