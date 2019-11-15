function getNewNumber(){
    let num = Math.floor(Math.random() * 101); 
    console.log(num);
    let elem = document.getElementsByClassName('random-bar');
    elem[0].textContent = num;
    console.log(elem);
    console.log(num);
}
