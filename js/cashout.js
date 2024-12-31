document.getElementById('addMoney-btn').addEventListener('click',function(){

    const currentMoney=currentBalanceInput('curr-balance');
    const input1Money=inputfieldValue('inputField-1');
    const updateMoney=currentMoney-input1Money;

    if(input1Money>currentMoney){
        alert('You do not have enough money');
        return 
    }

    document.getElementById('curr-balance').innerText=updateMoney;
    console.log(updateMoney)


    
   
})