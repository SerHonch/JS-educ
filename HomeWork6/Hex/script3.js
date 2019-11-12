class Hex {
    constructor(numb){
        this.numb = numb;
    }
    toString(){
        return `0x${this.numb.toString(16).toUpperCase()}`;
    }
    toJSON(){
        return `0x${this.numb.toString(16).toUpperCase()}`;
    }
    valueOf(){
        return this.numb.valueOf();
    }
    plus(numb){
        return new Hex(this.numb + numb);
    }
    minus(numb){
        return new Hex(this.numb - numb);
    }
    static parse(str) {
        return parseInt(str,16);
    }
}
let FF =  new Hex(255);
let a = new Hex(10);
let b = new Hex(5);
console.log(FF.toString() == '0xFF');
console.log(FF.toJSON() == '0xFF');
console.log(FF.valueOf() + 1 == 256);
console.log(a.plus(b).toJSON() == '0xF');
console.log(Hex.parse('0xFF') == 255);
console.log(Hex.parse("FF") == 255);