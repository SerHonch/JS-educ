class Marker{
    constructor(color = '',numIncPerc = 0){
        this.color = color;
        if(numIncPerc > 100){
            this.numIncPerc = 100;
        } else if(numIncPerc < 0){
            this.numIncPerc = 0;
        } else {
            this.numIncPerc = numIncPerc;
        } 
    }
    showPrint(str = ''){
        let buf = '';
        for(let i = 0; i < str.length; i++){
            if(this.numIncPerc > 0){
                buf += str[i]
                if(str[i] != ' ')
                this.numIncPerc = this.numIncPerc - 0.5;
                console.log(this.numIncPerc);
            }
        }
        let elem = document.getElementsByClassName('text');
        elem[0].textContent = buf;
        elem[0].style.color = this.color;
    }
}
class reMarker extends Marker{
    //refill
    doZapravker(num = 0){
        if(this.numIncPerc + num > 100){
            this.numIncPerc = 100;
        } else{
            this.numIncPerc += num;
        }
    }
}
let mark = new reMarker('blue', 100);