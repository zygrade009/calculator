

function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*(1.0)*num2;
}
function divide(num1,num2){
    return num1*(1.0)/num2;
}


/// input button  ///
function handleClick(character){
    const inputbox=document.querySelector('.inputbox');
    let store=inputbox.innerHTML;
    if(inputbox){
        store+=character;
    }
    inputbox.innerHTML=store;
    return;
}
let charArray=['+','-','*','/'];
for(let i=0;i<14;i++){
    if(i>=10){
        const button=document.getElementById(charArray[i-10]);
        button.addEventListener('click',()=>{handleClick(charArray[i-10]);});
        continue;
    }
    const button=document.getElementById(i);
    button.addEventListener('click',()=>{handleClick(i);});
}
/// clear button ///
const clearButton=document.querySelector('.clear');
clearButton.addEventListener('click',()=>{document.querySelector('.inputbox').innerHTML='';});
/// delete button ///
const deleteButton=document.querySelector('.delete');
deleteButton.addEventListener('click',()=>{
      let output=document.querySelector('.inputbox');


});
///output button////
let output='ffffff';
const equalButton=document.querySelector('.equal-button');
           ////operator /////
function operator() {
    const inputbox = document.querySelector('.inputbox');
    if (!inputbox) {
        return 'Input box not found';
    }

    const input = inputbox.innerHTML;
    let result;

    try {
        // Use regex to split the input into numbers and operator
        const match = input.match(/(\d+)([+\-*/])(\d+)/);
        if (!match) {
            alert('Invalid input');
            return 'Invalid input';
        }

        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);

        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                result = 'Invalid operator';
        }
    } catch (error) {
        result = 'Error: ' + error.message;
        console.log(error);
    }

    return result;
}
equalButton.addEventListener('click',()=>{
    let outputbox=document.querySelector('.outputbox');
    output=operator();
    outputbox.innerHTML=output;
    return;
})