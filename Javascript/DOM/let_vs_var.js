for(var i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i);

    },1000);
}
//Output :=> 6 6 6 6 6

// let is bound to block scope or 1 iteration of for loop. So every iteration ha dffereent i bound to it.
// If  you want  to create variable in te global scope , use var.
//If you want to restrict the variable to one block or 1 iteration of for loop , use let.

for(let i=1;i<=5;i++){
    setTimeout(function(){
        console.log(i);

    },1000);
}
//Output :=> 1 2 3 4 5
