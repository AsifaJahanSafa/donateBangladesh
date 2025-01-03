function inputfieldValue(id){
    const inputField=document.getElementById(id).value;
   
    const inputNumber=parseFloat(inputField);
    console.log(typeof inputNumber);
    return inputNumber
}


function currentBalanceInput(id){
    const currentValue=document.getElementById(id).innerText;
    const currentNumber=parseFloat(currentValue)
   
    return currentNumber
}


function blurOption(id){
   document.getElementById(id).classList.remove('hidden');
}


function opacity(id){
    document.getElementById(id).classList.add('blur-sm')
}
function opacityRemove(id){
    document.getElementById(id).classList.remove('blur-sm')
}


