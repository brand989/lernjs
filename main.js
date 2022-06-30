/* 3 task
let a = Number(prompt("введите число а"));
let b = Number(prompt("введите число b"));

if(a>=0 && b>=0){
    console.log(a-b)
} else if(a<0 && b<0){
    console.log(a*b)
} else {
    console.log(a+b)
}

*/

/* 4 task
let a = Number(prompt("введите число а"));

switch(a){
    case 1:
        console.log("1")     
    case 2:
        console.log("2")
    case 3:
        console.log("3")     
    case 4:
        console.log("4")
    case 5:
        console.log("5")     
    case 6:
        console.log("6")
    case 7:
        console.log("7")     
    case 8:
        console.log("8")
    case 9:
        console.log("9")     
    case 10:
        console.log("10")
        break;
}

*/

/*

 //5 task
function sum(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mult(a,b){
    return a*b
}

function div(a,b){
    return a/b
}


//6 task
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "+":
            return sum(arg1,arg2)
            break
        case "-":
            return sub(arg1,arg2)
            break
        case "*":
            return mult(arg1,arg2)
            break
        case "/":
            return div(arg1,arg2)
            break
    }
}

let a = Number(prompt("введите число а"));
let b = Number(prompt("введите число b"));
let operation = (prompt("введите оперецию"));

console.log(mathOperation(a,b,operation))

*/


// 7 task
function power(val, pow){
    if(pow == 0){
        return 1
    }
    pow--
    return val*power(val,pow)
}

let a = Number(prompt("введите число"));
let b = Number(prompt("введите степень"));

console.log(power(a,b));