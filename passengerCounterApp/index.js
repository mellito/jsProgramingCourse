let people=0;
let countEl =document.getElementById('count-el');
function increment(){
    
    people=people+1
    countEl.innerText= people;
    
}

function saveCount(){
    console.log(people);
}

let points = 4;
let bonusPoints = '10';
let totalPoints = points + bonusPoints;

console.log(totalPoints);

console.log(4+5); // 9
console.log('2'+'4'); // 24
console.log('5'+1); // 51
console.log(100+'100'); // 100100