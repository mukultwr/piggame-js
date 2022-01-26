'use strict';

const score0=document.getElementById('score--0');
const score1=document.getElementById('score--1');
const curP0=document.getElementById('current--0');
const curP1=document.getElementById('current--1');
const dice=document.querySelector('.dice');
const buttonN=document.querySelector('.btn--new');
const buttonR=document.querySelector('.btn--roll');
const buttonH=document.querySelector('.btn--hold');

let curScore=0;


score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');


buttonR.addEventListener('click',function(){
//generating a random dice roll so we will use Math.random for generating and Math.trunc to reduce the decimal part
const diceG=Math.trunc(Math.random()*6)+1;
//we will display the dice 
dice.classList.remove('hidden');
dice.src=`diceG-$(diceG).png`;
if(diceG!==1){
    curScore+=diceG;
    curP0.textContent=curScore;
}

})