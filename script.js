'use strict';

const score0=document.getElementById('score--0');
const score1=document.getElementById('score--1');
const curP0=document.getElementById('current--0');
const curP1=document.getElementById('current--1');
const dice=document.querySelector('.dice');
const buttonN=document.querySelector('.btn--new');
const buttonR=document.querySelector('.btn--roll');
const buttonH=document.querySelector('.btn--hold');
const player0A=document.querySelector('.player--0');
const player1A=document.querySelector('.player--1');
const score=[0,0];
let curScore=0;
let activePlayer=0;
let playing=true;

score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');
const switchPlayer= function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer=activePlayer=== 0?1:0;
    curScore=0;
    player0A.classList.toggle('player--active');
    player1A.classList.toggle('player--active');
    }

//rolling button
buttonR.addEventListener('click',function(){
    if(playing){
//generating a random dice roll so we will use Math.random for generating and Math.trunc to reduce the decimal part
const diceG=Math.trunc(Math.random()*6)+1;
//we will display the dice 
dice.classList.remove('hidden');
dice.src=`dice-${diceG}.png`;

//checking the roll 1
if(diceG!==1){
    curScore+=diceG;
    document.getElementById(`current--${activePlayer}`).textContent=curScore;
   // curP0.textContent=curScore;
}
else{
    //switch to next player
   switchPlayer();
}
    }
});
//hold button
buttonH.addEventListener('click',function(){
    if(playing){
score[activePlayer]+=curScore;
document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
if(score[activePlayer]>=10){
    playing =false;
    dice.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

}

else{
switchPlayer();
}
    }
})
buttonN.addEventListener('click',function(){
    //we can make a function of these and can call here only
    const score=[0,0];
    let curScore=0;
    let activePlayer=0;
    let playing=true;
    score0.textContent=0;
    score1.textContent=0
    curP0.textContent=0;
    curP1.textContent=0;
    player0A.classList.remove('player--winner');
    player1A.classList.remove('player--winner');
    player0A.classList.add('player--active');
    player1A.classList.remove('player--active');
    dice.classList.add('hidden');
  
})