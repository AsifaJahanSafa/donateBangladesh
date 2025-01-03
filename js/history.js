// card-1 modal
document.getElementById('modal-btn').addEventListener('click',function(){
    
    const input1=inputfieldValue('inputField-1');
    const cardTitle1=document.getElementById('card-title-1').innerText;
    const currentDate1=new Date().toLocaleString();
    console.log(input1,cardTitle1)
    const div1=document.createElement('div');
    div1.style.backgroundColor='lightGrey'
    div1.style.borderRadius='5px'
    div1.style.padding='35px'
    div1.style.marginBottom='15px'

    div1.innerHTML=`
   <h2>${input1}Tk ${cardTitle1}</h2>
   <p>${currentDate1}</p>

    `
    const container=document.getElementById('his-container');
    container.appendChild(div1);
    console.log(container)
})



// card-2 modal
document.getElementById('modal-id-2').addEventListener('click',function(){
    
    const input2=inputfieldValue('inputField-2');
    const cardTitle2=document.getElementById('card-title-2').innerText;
    const currentDate2=new Date().toLocaleString();
    console.log(input2,cardTitle2)
    const div2=document.createElement('div');
    div2.style.backgroundColor='lightGrey'
    div2.style.borderRadius='5px'
    div2.style.padding='35px'
    div2.style.marginBottom='15px'

    div2.innerHTML=`
   <h2>${input2}Tk ${cardTitle2}</h2>
   <p>${currentDate2}</p>

    `
    const container=document.getElementById('his-container');
    container.appendChild(div2);
    console.log(container)
})


// card-3 modal
document.getElementById('modal-id-3').addEventListener('click',function(){
    
    const input3=inputfieldValue('inputField-3');
    const cardTitle3=document.getElementById('card-title-3').innerText;
    const currentDate3=new Date().toLocaleString();
    console.log(input3,cardTitle3)
    const div3=document.createElement('div');
    div3.style.backgroundColor='lightGrey'
    div3.style.borderRadius='5px'
    div3.style.padding='35px'
    div3.style.marginBottom='15px'

    div3.innerHTML=`
   <h2>${input3}Tk ${cardTitle3}</h2>
   <p>${currentDate3}</p>

    `
    const container=document.getElementById('his-container');
    container.appendChild(div3);
    console.log(container)
})