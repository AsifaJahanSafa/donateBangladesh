document.getElementById('addMoney-btn').addEventListener('click',function(){
    const modal=blurOption('modal-id');
    const headerBlur=opacity('header');
    const cardBlur=opacity('card-id');
    console.log(modal)
})


document.getElementById('modal-btn').addEventListener('click',function(){
    const modalOff=document.getElementById('modal-id');
    modalOff.classList.add('hidden');
    
    const headerBlurRemove=opacityRemove('header')
    const cardBlurRemove=opacityRemove('card-id')
    console.log(modalOff)
})


