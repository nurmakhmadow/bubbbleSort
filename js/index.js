let number = [2, 7, 5, -7, 55, 888, -879]



function sortNumber(arr){
let short = arr.length
let cicle = false

do {
    cicle =false
    for(i = 0; i < short - 1; i++){
    for ( k =0 ; k < short - 1; k++ ){
        if(arr[k] > arr[k+1]){
            let lastOne = arr[k] 
            arr[k] = arr[k+1];
            arr[k+1] = lastOne
        }
    }
    }
}while (cicle);
return arr;
}

console.log(sortNumber(number));