let username=prompt("please enter your name: ");
let userscore=0;
let compscore=0;
let userpoints=document.querySelector("#userscore");
console.log(userpoints);
let comppoints=document.querySelector("#compscore");
console.log(comppoints);
let msg=document.querySelector("#msg");
console.log(msg);
const choices=document.querySelectorAll(".choice");
console.log(choices);
generaterdm=()=>
{
    let options=["rock","paper","scissor"];
    let comprdm=Math.floor(Math.random()*3);
    console.log("randomly generated is:",comprdm);
    return options[comprdm];
}
playGame=(userchoice)=>{
    console.log("userchoice is in playgame",userchoice);
    let compchoice=generaterdm();
    console.log("computer selected is",compchoice);
    userWin=true;
    if(userchoice===compchoice){
        msg.innerText="game is draw,Try again!";
        console.log("game is draw!");
    }
    else if( userchoice==="rock"){
        userWin=compchoice==="paper"?false:true;
    }
    else if( userchoice==="paper"){
        userWin=compchoice==="scissor"?false:true;
    }
    else {
        userWin=compchoice==="rock"?false:true;
    }
    if(userWin){
        userscore++;
        userpoints.innerText=userscore;
        msg.innerText=`${username} won over computer!`;
        console.log("user won over computer!");
    }
    else{
        compscore++;
        comppoints.innerText=compscore;
        msg.innerText= `computer won over you ${username}!`;
        console.log("computer won!!!")
    }
    
}

choices.forEach((choice)=>{
    console.log("the id s are:",choice.id);
    choice.addEventListener("click", ()=>
    {
        let userchoice=choice.getAttribute("id");
        playGame(userchoice);
    })
});
    /*choice.addEventlistener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice1 selected !",userchoice);
    });
});*/