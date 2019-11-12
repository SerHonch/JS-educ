function tickets(arr){
    let counter25 = 0;
    let counter50 = 0;
    let counter100 = 0;
    const ticketPrice = 25;
    for(let i = 0; i < arr.length; i++){
        if(arr[0] != ticketPrice){
            return 'NO';
        } else if (arr[i] == ticketPrice){
            counter25++;
        } else if(arr[i] == 50 && counter25 >= 1){
            counter25--;
            counter50++;
        } else if(arr[i] == 100) {
            if(counter50 >= 1 && counter25 >= 1){
                counter25--;
                counter50--;
                counter100++;
            }
            if(arr[i] == 100 && counter25 >=3){
                counter25 -= 3;
                counter100++;
            } else {
                return 'NO';
            }
        } else {
            return 'NO';
        } 
    }
    return 'YES';
}
console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));