let a = 10;
const b = 30;
var c = 20;

if(true){
    let a = 300;
    // console.log(a); //this is block scope
}

// console.log(a); //this is a global scope variable

// functional scoping

function whatsAppuser(){
   
    let name = "Adharsh";
    
    function personalDetails(){
        let phoneNo = "993XXX423"
        let address = "Hyderabad";
        console.log(name); //this block can access the outer function variables
    }
     
    personalDetails();
    console.log(name ); 

}

// console.log(address); // this will throw an error becuase the address is block scoped and we are trying to use it out of the block

whatsAppuser();


