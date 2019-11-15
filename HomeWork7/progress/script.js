function getProgress(){
    let elem = document.getElementsByClassName('color-bar');
    console.log(elem);
    if(elem[0].style.width == ''){
        elem[0].style.width = 5 + '%';
        return;
    } 
    let newPerc = elem[0].style.width;
    if(newPerc == '100%'){
        return;
    }
    elem[0].style.width = parseInt(newPerc) + 5 + '%';
    elem[0].textContent = elem[0].style.width;
}

// if (newPerc == '5%') {
//     newPerc = newPerc.slice(0,1);
// } else if(newPerc == '100%'){
//     return;
// }
//     newPerc = newPerc.slice(0,2);
//     newPerc = Number(newPerc) + 5;
//     elem[0].style.width = newPerc + '%';
    