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
    attack(fighter2) {
        fighter2.health -= this.damagePerAttack;
    }
}
let fighter1 = new Fighter('', 100, 30);
let fighter2 = new Fighter('', 100, 40);
let hp1 = document.querySelector('.health.bar1 p');
hp1.innerText = document.querySelector('.bar1 .color-bar').style.width;
let hp2 = document.querySelector('.health.bar2 p');
hp2.innerText = document.querySelector('.bar2 .color-bar').style.width;

function attack(){
    let elem = document.querySelector('.bar1 .color-bar');
    let elem1 = document.querySelector('.bar2 .color-bar');
    if(parseInt(elem.style.width) <= 0 || parseInt(elem1.style.width) <= 0) {
        return;
    }
    let newPerc = elem.style.width;
    if(parseInt(newPerc) - fighter1.damagePerAttack <= 0) {
        elem.style.width = '0%';
        let anim = document.querySelector(".item-2");
        anim.classList.add("animation");
        let timerId = setTimeout(() => anim.classList.remove('animation'), 1000);
        hp1.innerText = document.querySelector('.bar1 .color-bar').style.width;
        return;
    } else {
        elem.style.width = parseInt(newPerc) - fighter1.damagePerAttack + '%';
        let anim = document.querySelector(".item-2");
        anim.classList.add("animation");
        let timerId = setTimeout(() => anim.classList.remove('animation'), 1000);
        hp1.innerText = document.querySelector('.bar1 .color-bar').style.width;
    }
    let timerIdAI = setTimeout(() => {
        let elem1 = document.querySelector('.bar2 .color-bar');
        if(elem1.style.width == '0%') {
            return;
        }
        let newPerc1 = elem1.style.width;
        if(parseInt(newPerc1) - fighter2.damagePerAttack <= 0) {
            elem1.style.width = '0%';
            let anim1 = document.querySelector(".item-1");
            anim1.classList.add("animation1");
            let timerId1 = setTimeout(() => anim1.classList.remove('animation1'), 1000);
            hp2.innerText = document.querySelector('.bar2 .color-bar').style.width;
        } else {
            elem1.style.width = parseInt(newPerc1) - fighter2.damagePerAttack + '%';
            let anim1 = document.querySelector(".item-1");
            anim1.classList.add("animation1");
            let timerId1 = setTimeout(() => anim1.classList.remove('animation1'), 1000);
            hp2.innerText = document.querySelector('.bar2 .color-bar').style.width;
        }
    },1000);
}