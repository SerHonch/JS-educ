function nextVersion(arg){
    let point = false;
    let buf = arg.split('.');
    if(buf[0] == 9){
       for(let i = 1; i < buf.length; i++){
           if(buf[i] != '9'){
              point = true;
           }
       }
       if(!point){
        for(let i = 1; i < buf.length; i++){
            buf[i] = '0';
        }
        buf[0]++;
        return buf.join('.');
       }
    }
    buf = buf.join('');
    buf = Number(buf);
    buf++;
    buf = buf.toString();
    buf = buf.split('');
    buf = buf.join('.');
    return buf;
    }
   
console.log(nextVersion("1.2.3") === "1.2.4");
console.log(nextVersion("0.9.9") === "1.0.0");
console.log(nextVersion("1") === "2");
console.log(nextVersion("9.8.9") === "9.9.0");
console.log(nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9");
console.log(nextVersion("9.9") === "10.0");
console.log(nextVersion("9.9.9.9.9") === "10.0.0.0.0");
