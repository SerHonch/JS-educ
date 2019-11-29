class Fighter{
    constructor(name, health,  minDam, maxDam){
        this.name = name;
        this.health = health;
        if(this.health <= 0){
            this.health = 1;
        }
        else {
            this.health = health;
        }
        // damagePerAttack,
        // this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name;}
        this.minDam = minDam;
        this.maxDam = maxDam;
    }
 
}
// let fighter1 = new Fighter('', 100, 15);
// let fighter2 = new Fighter('', 100, 20);
// let hp1 = document.querySelector('.health.bar1 p');
// hp1.innerText = document.querySelector('.bar1 .color-bar').style.width;
// let hp2 = document.querySelector('.health.bar2 p');
// hp2.innerText = document.querySelector('.bar2 .color-bar').style.width;

// function attack(){
//     let elem = document.querySelector('.bar1 .color-bar');
//     let elem1 = document.querySelector('.bar2 .color-bar');
//     if(parseInt(elem.style.width) <= 0 || parseInt(elem1.style.width) <= 0) {
//         return;
//     }
//     let newPerc = elem.style.width;
//     if(parseInt(newPerc) - fighter1.damagePerAttack <= 0) {
//         elem.style.width = '0%';
//         let anim = document.querySelector(".item-2");
//         anim.classList.add("animation");
//         let timerId = setTimeout(() => anim.classList.remove('animation'), 1000);
//         hp1.innerText = document.querySelector('.bar1 .color-bar').style.width;
//         return;
//     } else {
//         elem.style.width = parseInt(newPerc) - fighter1.damagePerAttack + '%';
//         let anim = document.querySelector(".item-2");
//         anim.classList.add("animation");
//         let timerId = setTimeout(() => anim.classList.remove('animation'), 1000);
//         hp1.innerText = document.querySelector('.bar1 .color-bar').style.width;
//     }
//     let timerIdAI = setTimeout(() => {
//         let elem1 = document.querySelector('.bar2 .color-bar');
//         if(elem1.style.width == '0%') {
//             return;
//         }
//         let newPerc1 = elem1.style.width;
//         if(parseInt(newPerc1) - fighter2.damagePerAttack <= 0) {
//             elem1.style.width = '0%';
//             let anim1 = document.querySelector(".item-1");
//             anim1.classList.add("animation1");
//             let timerId1 = setTimeout(() => anim1.classList.remove('animation1'), 1000);
//             hp2.innerText = document.querySelector('.bar2 .color-bar').style.width;
//         } else {
//             elem1.style.width = parseInt(newPerc1) - fighter2.damagePerAttack + '%';
//             let anim1 = document.querySelector(".item-1");
//             anim1.classList.add("animation1");
//             let timerId1 = setTimeout(() => anim1.classList.remove('animation1'), 1000);
//             hp2.innerText = document.querySelector('.bar2 .color-bar').style.width;
//         }
//     },1000);
// }
let fighter1 = new Fighter('', 100, 20, 30);
let fighter2 = new Fighter('', 100, 15, 25);


let hp1 = document.querySelector('.health.bar1 p');
let elem1 = document.querySelector('.bar1 .color-bar');
hp1.innerText = elem1.style.width;
let hp2 = document.querySelector('.health.bar2 p');
let elem2 = document.querySelector('.bar2 .color-bar');
hp2.innerText = elem2.style.width;
let anim1 = document.querySelector(".item-2");
let anim2 = document.querySelector(".item-1");
let drop1 = document.querySelector('.item-1 span');
let drop2 = document.querySelector('.item-2 span');
let flag = true;
let damage1 = 0;
let damage2 = 0;
document.addEventListener("DOMContentLoaded",ready);
document.querySelector('.btn').addEventListener('click', () => {
    if(flag) {
        flag = false;
        if(parseInt(elem1.style.width) > 0 && parseInt(elem2.style.width) > 0){
            attack();
        setTimeout(() => {
            flag = true;
        },2000);
        }
    }
});
function attack(){
    firstAttack ();
    secondAttack();
}
function firstAttack (){
    damage1 = getRandomDamage(fighter1.minDam , fighter1.maxDam);
    
    let newPerc2 = elem2.style.width;
        if(parseInt(newPerc2) - damage1 <= 0) {
            elem2.style.width = '0%';
            anim2.classList.add("animation1");
            let timerId1 = setTimeout(() => anim2.classList.remove('animation1'), 1000);
            hp2.innerText = elem2.style.width;
            damagePrint1(damage1);
            setTimeout(()=> anim1.style.animation = 'salto 3s' , 1000);
            setTimeout(()=> anim1.style.transform = 'translateY(70px) rotate(-250deg)' , 4000);
        } else {
            elem2.style.width = parseInt(newPerc2) - damage1 + '%';
            anim2.classList.add("animation1");
            let timerId1 = setTimeout(() => anim2.classList.remove('animation1'), 1000);
            hp2.innerText = elem2.style.width;
            damagePrint1(damage1);
        }
}
function secondAttack(){
    damage2 = getRandomDamage(fighter2.minDam , fighter2.maxDam);
    let timerIdAI = setTimeout(() => {
        if(elem2.style.width == '0%') {
            setTimeout(()=>  endGame('Alliance WIN!') , 5000);
            return;
        }
    let newPerc1 = elem1.style.width;
        if(parseInt(newPerc1) - damage2 <= 0) {
            elem1.style.width = '0%';
            anim1.classList.add("animation");
            let timerId = setTimeout(() => anim1.classList.remove('animation'), 1000);
            hp1.innerText = elem1.style.width;
            damagePrint2(damage2);
            setTimeout(()=> anim2.style.animation = 'salto 3s' , 1000);
            setTimeout(()=> anim2.style.transform = 'translateY(70px) rotate(-250deg)' , 4000);
            setTimeout(()=>  endGame('Horde WIN!') , 5000); 
            return;
        } else {
            elem1.style.width = parseInt(newPerc1) - damage2 + '%';
            anim1.classList.add("animation");
            let timerId = setTimeout(() => anim1.classList.remove('animation'), 1000);
            hp1.innerText = elem1.style.width;
            damagePrint2(damage2);
        }
        },1000);
}
function damagePrint1(damage){
    drop2.innerText = `-${damage}`;
    drop2.classList.add('drop');
    setTimeout(() => drop2.classList.remove('drop'), 1000);
}
function damagePrint2(damage){
    drop1.innerText = `-${damage}`;
    drop1.classList.add('drop');
    setTimeout(() => drop1.classList.remove('drop'), 1000);
}
function getRandomDamage(minDam, maxDam) {
    return Math.floor(Math.random() * (maxDam - minDam)) + minDam;
}

function myOverlay() {
    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.querySelector('.main').appendChild(overlay);
}
function ready() {
    myOverlay();
}
function endGame (str){
    myOverlay();
    document.querySelector('.pressEnd p').innerText = str;
    document.querySelector('.end').style.display = 'flex';
    
}
document.querySelector('.start').addEventListener('click', () => {
    document.querySelector('.start-form').style.animation = 'dropUpMenu 1s ease-in-out';
    setTimeout(() => {
        document.querySelector('.start-form').style.display = 'none';
    },1000);
    document.querySelector('.main').removeChild(document.querySelector('#overlay'));
});
