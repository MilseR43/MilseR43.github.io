const clickButton=document.getElementById("clickButton");

const Upgrade1=document.getElementById("Upgrade1");

const SlotMachine=document.getElementById("SlotMachine");

const SlotMachine2=document.getElementById("SlotMachine2");

const slotMachineWinSfx=document.getElementById("slotMachineWinSfx");

const slotMachineLoseSfx=document.getElementById("slotMachineLoseSfx");

const slotMachineLoseImg=document.getElementById("slotMachineLoseImg");

const slotMachineWinImg=document.getElementsByName("slotMachineWinImg");

const clickCountDisplay=document.getElementById("clickCountDisplay");

const ekhSfx=document.getElementById("ekhSfx");

let clickCount = 0;

let costOfUpgrade1= 10;

let multiplier=1;

let upgradeCost=2;

let costOfSlotMachine=100;

function clicksDisplaied(){
    clickCountDisplay.innerText="you have clicked the button: "+ clickCount + " times!"
}

clickButton.addEventListener("click", ()=>{
    clickCount+=multiplier
    clicksDisplaied();
    ekhSfx.play();
ekhSfx.currentTime=0;
});

Upgrade1.addEventListener("click", ()=>{
if (clickCount >= costOfUpgrade1){
    clickCount-= costOfUpgrade1;
    multiplier++;
    costOfUpgrade1*=2;
    clicksDisplaied();
    Upgrade1.innerText= "upgrade for "+ costOfUpgrade1 + " clicks"
}
else{
    clickCountDisplay.innerText="not enough clicks."
}

});
SlotMachine.addEventListener("click", ()=>{
if(clickCount >= costOfSlotMachine){
    clickCount-= costOfSlotMachine;
    let chance = Math.random();
    if (chance < 0.1){
    SlotMachine.innerText="Great Plunder!!! you Win common prize, keep spinning for 100 clicks?";
    slotMachineWinSfx.play();
    slotMachineWinSfx.currentTime=0;
    slotMachineWinImg.hidden=false;

}
        else{
        SlotMachine.innerText="you Lose, try again for 100 clicks?";
        slotMachineLoseSfx.play();
        slotMachineLoseSfx.currentTime=0;
        slotMachineLoseImg.hidden=false;
    }
}

});
SlotMachine2.addEventListener("click", ()=>{
if(clickCount >= costOfSlotMachine){
    clickCount-= costOfSlotMachine;
    let chance = Math.random();
    if (chance < 0.01){
        SlotMachine2.innerText="Great Plunder!!! you Win Rare prize keep spinning for 100 clicks?";
    slotMachineWinSfx.play();
    slotMachineWinSfx.currentTime=0;
    slotMachineWinImg.hidden=false;
}
        else{
        SlotMachine2.innerText="you Lose, try again for 100 clicks?";
        slotMachineLoseSfx.play();
        slotMachineLoseSfx.currentTime=0;
        slotMachineLoseImg.hidden=false;
    }
}
});