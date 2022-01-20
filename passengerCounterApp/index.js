let people=0;
let countEl =document.getElementById('count-el');
let saveEl= document.getElementById('save-el');

function increment(){
    
    people+=1
    countEl.textContent= people;
    
}

function saveCount(){

   let countStr= ' '+ people + ' - ';
   
   saveEl.textContent+= countStr;  
   people=0;
   countEl.innerText= people;
}

