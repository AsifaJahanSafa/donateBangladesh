// 1st card 

document.getElementById('addMoney-btn').addEventListener('click',function(){
  
  
    

    const input1=inputfieldValue('inputField-1');

    if(isNaN(input1)){
        alert('This is not valid input');
        return
    }
    else if(input1<0){
        alert('This is not valid input')
       return
    }
    
    else{

        const donateMoney=currentBalanceInput('donate-balance');
        const updatedonate= donateMoney+input1;
            document.getElementById('donate-balance').innerText=updatedonate
            console.log(updatedonate);
    }
       
           
    
})


// 2nd card
document.getElementById('addMoney-btn-2').addEventListener('click',function(){
  
  
    

    const input2=inputfieldValue('inputField-2');

    if(isNaN(input2)){
        alert('This is not valid input');
        return
    }
    else if(input2<0){
        alert('This is not valid input')
       return
    }
    
        const donateMoney=currentBalanceInput('donate-balance-2');
        const updatedonate= donateMoney+input2;
            document.getElementById('donate-balance-2').innerText=updatedonate
            console.log(updatedonate);
           
    
})


// 3rd card
document.getElementById('addMoney-btn-3').addEventListener('click',function(){
  
  
    

    const input3=inputfieldValue('inputField-3');

    if(isNaN(input3)){
        alert('This is not valid input');
        return
    }
    else if(input3<0){
        alert('This is not valid input')
       return
    }
    
        const donateMoney=currentBalanceInput('donate-balance-3');
        const updatedonate= donateMoney+input3;
            document.getElementById('donate-balance-3').innerText=updatedonate
            console.log(updatedonate);
           
    
})