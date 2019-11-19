class Fighter{
    constructor(name, health, damagePerAttack){
        this.name = name;
        this.health = health;
        if(this.health <= 0){
            this.health = 1;
        }
        else {
            this.health = health;
        }
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name;}
    }
    heal(num){
        this.health = this.health + num;
    }
}
let fighter1 = new Fighter('Anton', 100, 10);
let fighter2 = new Fighter('Vitia', 100, 15);
function declareWinner (fighter1, fighter2, firstAttacker){
    do {
        if(firstAttacker == fighter1.toString()){
            fighter2.health -= fighter1.damagePerAttack;
            console.log(`${fighter1.toString()} нанес ${fighter1.damagePerAttack} уронa ${fighter2.toString()}\n
            у бойца ${fighter2.toString()} осталось здорвоья ${fighter2.health}`);
            firstAttacker = fighter2.toString();
        } 
        if(firstAttacker == fighter2.toString()){
            fighter1.health -= fighter2.damagePerAttack;
            console.log(`${fighter2.toString()} нанес ${fighter2.damagePerAttack} уронa ${fighter1.toString()}\n
            у бойца ${fighter1.toString()} осталось здорвоья ${fighter1.health}`);
            firstAttacker = fighter1.toString();
        }
    } while (fighter1.health > 0 && fighter2.health > 0);
    if(fighter1.health <= 0){
        console.log(`Победитель ${fighter2.toString()}`);
    } 
    else { 
        console.log(`Победитель ${fighter1.toString()}`);
    }
}