const player1Score= document.querySelector("#player1Score")
const player2Score= document.querySelector("#player2Score")
const player1Button= document.querySelector("#player1Button")
const player2Button= document.querySelector("#player2Button")
const resetButton=document.querySelector("#resetButton")
const select = document.querySelector("#select")
const main=document.querySelector("#main")
const player1Name=document.querySelector("[name=Player1]")
const player2Name=document.querySelector("[name=Player2]")
const inputForma=document.querySelector("#inputForm")
let player1Ime=''
let player2Ime=''
let counter1=0;
let counter2=0;
let playTo=5;
const win=document.createElement('h1');

player1Button.addEventListener('click',function(){
    counter1++;
    player1Score.innerText=counter1;
    console.log(counter1)
    if(counter1===playTo){
        player1Score.style.color='green';
        player2Score.style.color='red';
        player1Button.disabled=true;
        player2Button.disabled=true;
        main.appendChild(win).innerText=`${player1Ime} Wins !`;
        win.classList.add("text-center", "text-success")
    }
})
player2Button.addEventListener('click',function(){
    counter2++;
    player2Score.innerText=counter2;
    if(counter2===playTo){
        player2Score.style.color='green';
        player1Score.style.color='red';
        player2Button.disabled=true;
        player1Button.disabled=true;
        main.appendChild(win).innerText=`${player2Ime} Wins !`;
        win.classList.add("text-center","text-primary")
        player1Name.value='';
        player2Name.value='';
    }
})

resetButton.addEventListener('click',function(){
    player1Score.innerText=0;
    player1Score.style.color='';
    player1Button.disabled=false;
    counter1=0;
    player2Score.style.color='';  
    player2Score.innerText=0; 
    player2Button.disabled=false;
    counter2=0;
    win.classList.remove("text-success","text-primary");
    win.remove()
    select.value=5;
    playTo=5;
    player1Button.innerText="Player1"
    player2Button.innerText="Player2"

})
select.addEventListener('change',function(){    
    playTo=parseInt(this.value);
})

inputForma.addEventListener('submit',function(e){
    e.preventDefault();
    player1Button.innerText=`P1 - ${player1Name.value}`;
    player2Button.innerText=`P2 - ${player2Name.value}`;
    player1Ime=player1Name.value;
    player2Ime=player2Name.value;
    player1Name.value='';
    player2Name.value='';
    
})
