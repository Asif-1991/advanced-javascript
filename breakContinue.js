// break, continue
//=============================
const numbers = [1, -2, 3, 4, -5, 6, -7];
for(let i = 0; i < numbers.length; i++){
    
    if(numbers[i] > 3){
        break;
    };
    // console.log(numbers[i]);
}
for(let i = 0; i < numbers.length; i++){

    if(numbers[i] < 0){
        continue;
    }
    console.log(numbers[i]);
}
