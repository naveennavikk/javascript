const mysymbol = Symbol("mykey");
const whatsApp = {
    userName :"naveen",
    phoneNo  :"9XXXXXXXX",
    age :"19",
    height : {
        feet : " 5 feet",
        inch : " 5 inch"
    }
    ["mysymbol"] = " this is the symbol"
}

console.log(whatsApp.userName);
console.log(whatsApp);

console.log(whatsApp.height);
console.log(typeof whatsApp.mysymbol);

console.log(typeof mysymbol)
 
console.log(Object.keys(whatsApp));
console.log(Object.values(whatsApp));
console.log(Object.entries(whatsApp));

//scope.js
a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible


