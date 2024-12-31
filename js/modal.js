// first card modals
document.getElementById('addMoney-btn').addEventListener('click',function(){
    const input1=inputfieldValue('inputField-1');
    if(input1<0){
        return
    }
    const modal=blurOption('modal-id');
    const headerBlur=opacity('header');
    const cardBlur=opacity('card-id');
    const cardId2=opacity('card-id-2')
    console.log(modal)
})


document.getElementById('modal-btn').addEventListener('click',function(){
    const modalOff=document.getElementById('modal-id');
    modalOff.classList.add('hidden');
    
    const headerBlurRemove=opacityRemove('header')
    const cardBlurRemove=opacityRemove('card-id')
    const card2BlurRemove=opacityRemove('card-id-2')
    console.log(modalOff)
})


// second card modals

document.getElementById('addMoney-btn-2').addEventListener('click',function(){
    const input2=inputfieldValue('inputField-2');
    if(input2<0){
        return
    }
    const modal=blurOption('modal-id-2');
    const headerBlur=opacity('header');
    const cardBlur=opacity('card-id');
    const cardId2=opacity('card-id-2')
    console.log(modal)
})


document.getElementById('modal-id-2').addEventListener('click',function(){
    const modalOff=document.getElementById('modal-id-2');
    modalOff.classList.add('hidden');
    
    const card2BlurRemove=opacityRemove('card-id-2')
    const card1BlurRemove=opacityRemove('card-id')
    const headerBlurRemove=opacityRemove('header')
    
    console.log(modalOff)
})

// 3rd card
// second card modals

document.getElementById('addMoney-btn-3').addEventListener('click',function(){
    const input3=inputfieldValue('inputField-3');
    if(input3<0){
        return
    }
    const modal=blurOption('modal-id-3');
    const headerBlur=opacity('header');
    const cardBlur=opacity('card-id');
    const cardId2=opacity('card-id-2')
    const cardId3=opacity('card-id-3')
    console.log(modal)
})


document.getElementById('modal-id-3').addEventListener('click',function(){
    const modalOff=document.getElementById('modal-id-3');
    modalOff.classList.add('hidden');
    
    const card2BlurRemove=opacityRemove('card-id-2')
    const card1BlurRemove=opacityRemove('card-id')
    const headerBlurRemove=opacityRemove('header')
    const cardBlurRemove=opacityRemove('card-id-3')
    
    console.log(modalOff)
})