function newColor (){
    let elem = document.querySelectorAll('.item');
    if(elem[0].style.backgroundColor == 'red'){
        elem[0].style.backgroundColor = '';
        elem[1].style.backgroundColor = 'yellow';
        elem[2].style.backgroundColor = '';
        return;
    }
    if(elem[1].style.backgroundColor == 'yellow'){
        elem[0].style.backgroundColor = '';
        elem[1].style.backgroundColor = '';
        elem[2].style.backgroundColor = 'green';
        return;
    }
    if(elem[2].style.backgroundColor == 'green'){
        elem[0].style.backgroundColor = 'red';
        elem[1].style.backgroundColor = '';
        elem[2].style.backgroundColor = '';
        return;
    } else {
        elem[0].style.backgroundColor = 'red';
    }
}
//    let buf = new Map();
//     elem.forEach( (item, i) => {
//         buf.set(i, item.style.backgroundColor);
//     });
//     if(buf.get(0) == ''){
//         elem[0].style.backgroundColor = 'red';
//     }
//     if(buf.get(0) == 'red'){
//         elem[0].style.backgroundColor = '';
//         elem[1].style.backgroundColor = 'yellow';
//     }
//     if(buf.get(1) == 'yellow'){
//         elem[0].style.backgroundColor = '';
//         elem[1].style.backgroundColor = '';
//         elem[2].style.backgroundColor = 'green';
//     }
//     if(buf.get(2) == 'green'){
//         elem[0].style.backgroundColor = 'red';
//         elem[1].style.backgroundColor = '';
//         elem[2].style.backgroundColor = '';
