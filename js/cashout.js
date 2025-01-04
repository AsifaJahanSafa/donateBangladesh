// 1st card

document.getElementById('addMoney-btn').addEventListener('click',function(){

    const currentMoney=currentBalanceInput('curr-balance');
    const input1Money=inputfieldValue('inputField-1');
    const updateMoney=currentMoney-input1Money;

    if(isNaN(input1)){
       
        return
    }

    if(input1Money>currentMoney){
        alert('You do not have enough money');
        return 
    }

    document.getElementById('curr-balance').innerText=updateMoney;
    console.log(updateMoney)

   

   
   
})


// 2nd card

document.getElementById('addMoney-btn-2').addEventListener('click',function(){

    const currentMoney=currentBalanceInput('curr-balance');
    const input2Money=inputfieldValue('inputField-2');
    const updateMoney=currentMoney-input2Money;

    if(isNaN(input2)){
        
        return
    }

    if(input2Money>currentMoney){
        alert('You do not have enough money');
        return 
    }

    document.getElementById('curr-balance').innerText=updateMoney;
    console.log(updateMoney)


    
   
})
//3rd card

document.getElementById('addMoney-btn-3').addEventListener('click',function(){

    const currentMoney=currentBalanceInput('curr-balance');
    const input3Money=inputfieldValue('inputField-3');
    const updateMoney=currentMoney-input3Money;

    if(isNaN(input3)){
        
        return
    }
    if(input3Money>currentMoney){
        alert('You do not have enough money');
        return 
    }

    document.getElementById('curr-balance').innerText=updateMoney;
    console.log(updateMoney)


    
   
})