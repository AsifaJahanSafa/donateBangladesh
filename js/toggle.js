// history btn click korle
document.getElementById('history-btn').addEventListener('click',function(){
    const mainId=document.getElementById('main-id');
    mainId.classList.add('hidden');
    
    const historyCon=document.getElementById('history-container');
    historyCon.classList.remove('hidden')

    


    const donationBtn=document.getElementById('donation-btn');
    donationBtn.classList.remove('bg-btn-bg')
    
    const historyBtn=document.getElementById('history-btn');
    historyBtn.classList.add('bg-btn-bg')
    
})


// donation btn click korle
document.getElementById('donation-btn').addEventListener('click',function(event){
    event.preventDefault()
    const mainId=document.getElementById('main-id');
    mainId.classList.remove('hidden');
     
    const historyCon=document.getElementById('history-container');
    historyCon.classList.add('hidden')

    const donationBtn=document.getElementById('donation-btn');
    donationBtn.classList.add('bg-btn-bg')
    
    const historyBtn=document.getElementById('history-btn');
    historyBtn.classList.remove('bg-btn-bg')
    
})