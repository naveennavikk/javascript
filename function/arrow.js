console.log(this) // gives {} as output

// we can stroe a function in a variable 
// normal function

const something = function(){
    let username = "Adharsh";
    console.log(this);
}

// Arrow function

const fun2 = () =>{
    let userName = "Adharsh";
    console.log("this is my first arrow function")
    console.log(this);
}

fun2();


// Implicit return

const fun3= (num1,num2) => (num1+num2);

console.log(fun3(10000,42343));


// explicit return

const funExplicit = (num1,num2)=>{
    // we use 'return ' keyword for returning the value in explicit function
    return num1+num2;
}

console.log(funExplicit(199,2993));


