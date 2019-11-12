class Dictionary {
    constructor(){
    this.map = new Map();
    }
    newEntry(key, value){
        this.map.set(key, value);
    }
    look(key){
    return this.map.has(key) ? this.map.get(key) : `Can't find entry for ${key}`;
    }
}
let d = new Dictionary();
d.newEntry("Apple", "A fruit that grows on trees");
console.log(`d.look("Apple") == A fruit that grows on trees ${d.look("Apple") === 'A fruit that grows on trees' }`); 
console.log(d.look("Banana"));