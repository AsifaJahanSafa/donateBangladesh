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
    
        const donateMoney=currentBalanceInput('donate-balance');
        const updatedonate= donateMoney+input1;
            document.getElementById('donate-balance').innerText=updatedonate
            console.log(updatedonate);
           
    
           
                
          
    
    

        
            
    
    
})


