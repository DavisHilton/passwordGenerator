//=================  DOM elements   ============================
const resultElement = document.getElementById('result');  //input box
const lengthElement = document.getElementById('length');  //length checkbox
const uppercaseElement = document.getElementById('uppercase');//uppercase box
const lowercaseElement = document.getElementById('lowercase');//lowe case box
const numberElement = document.getElementById('numbers');//numbers box
const symbolElement = document.getElementById('symbols');//symbols box
const generateElement = document.getElementById('generate'); // gererate button
const clipboardElement = document.getElementById('clipboard');//clip board icon


//===================================================================
//===============   Side note    ====================================
//http://www.net-comber.com/charset.html (chart of all char numbers)

// 26 letters in alphabet but alphbet dont start on list until 97
// so add 97 to get right starting point.
//console.log(Math.floor(Math.random() * 26) + 97)  
//==================================================================


// ========== Functions ==================

// Get random letter and make it lowere case or Upper case;
let getRandomLower= ()=>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


let getRandomUpper= ()=>{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


//Get Random Number
let getRandomNumber= ()=>{
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


//Get random symbol
let getRandomSymbol= ()=>{
const symbols ="!@#$%^&*(){}[]=<>,.";
return symbols[Math.floor(Math.random()* symbols.length)]
}



//====== Create an object of functions;============

const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};



// ====== Event listeners function ============

//When clicked we need to get the value not just element
//(do this with (length.Element.value)
//and put in a variable, then place in {} of function


generateElement.addEventListener('click', ()=>{     
    const length = +lengthElement.value;        //will display the value 
    const hasLower = lowercaseElement.checked;  // will display true/false
    const hasUpper = uppercaseElement.checked; //will display true/false
    const hasNumber= numberElement.checked;    //will display true/false
    const hasSymbol = symbolElement.checked;   //will display true/false     
    

//======= need to generate password =====(this is still in the funtion)
//1) pass in geneateElement.addEvenListeners(()=>{}) variables as perameters
//2) the results of this function will beww put in resultElement variable

resultElement.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol);

});
  
// ========  Generate password function  =========
let generatePassword =(length, lower, upper, number, symbol)=>{
    //1 intialize pw variable
    //2 filter out unchecked types
    //3 loop over the length
    //4 call a geneator function for each type
    //5 add final pw to the pw var and return

    let generatedPassword="";

}



// console.log(length, hasLower,hasUpper, hasNumber,hasSymbol) //check

