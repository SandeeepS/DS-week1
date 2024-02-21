//countdown using recursion

function countdown(number){
    console.log(number);
    const newNumber = number - 1 ;
    if(newNumber > 0){
        countdown(newNumber);
    }

}
countdown(5);