document.getElementById('modal-btn').addEventListener('click',function(){
    const historyCon=document.getElementById('history-container');
   

    const input1Money=inputfieldValue('inputField-1');
    const cardTitle1=document.getElementById('card-title-1').innerText;
    const currentDate = new Date().toLocaleString();
    const div=document.createElement('div');

    div.style.backgroundColor='lightGrey';
    div.style.padding='5px';
    div.style.borderRadius='5px'
    div.style.marginBottom='25px'
    div.innerHTML=`
   
    <h2> ${input1Money}tk ${cardTitle1}</h2>
    <p>${currentDate}</p>
    `

   
   historyCon.appendChild(div);
   console.log(historyCon)
})