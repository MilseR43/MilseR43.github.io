const clickButton=document.getElementById("clickButton");

const Upgrade1=document.getElementById("Upgrade1");

const SlotMachine=document.getElementById("SlotMachine");

const SlotMachine2=document.getElementById("SlotMachine2");

const slotMachineWinSfx=document.getElementById("slotMachineWinSfx");

const slotMachineLoseSfx=document.getElementById("slotMachineLoseSfx");

const clickCountDisplay=document.getElementById("clickCountDisplay");

const ekhSfx=document.getElementById("ekhSfx");

const Upgrade1Display=document.getElementById("Upgrade1Display");

const costForEquipment=document.getElementById("costForEquipment");

const slotMachineInnerText=document.getElementById("slotMachineInnerText");

const slotMachine2InnerText=document.getElementById("slotMachine2InnerText");

let clickCount = 0;

let costOfUpgrade1= 10;

let multiplier=1;

let costOfSlotMachine=100;

setTimeout(()=>{
const sometext=document.getElementById("Upgrade1Display")
}
);

function clicksDisplaied(){
    clickCountDisplay.innerText=clickCount + " Clicks!"
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
    costForEquipment.innerText= "Purchace an Upgrade For "+ costOfUpgrade1 + " Clicks?"
    Upgrade1Display.innerText="Now every click you click at "+ multiplier +" the original rate!"
}
else{
    clickCountDisplay.innerText="not enough clicks."
}

});
SlotMachine.addEventListener("click", ()=>{
if(clickCount >= costOfSlotMachine){
    clickCount-= costOfSlotMachine;
    clicksDisplaied();
    let chance = Math.random();
    if (chance < .1){
    slotMachineInnerText.innerText="Great Plunder!!! you Win common prize, keep spinning for 100 clicks?";
    slotMachineWinSfx.play();
    slotMachineWinSfx.currentTime=0;
}
        else{
        slotMachineInnerText.innerText="you Lose, try again for 100 clicks?";
        slotMachineLoseSfx.play();
        slotMachineLoseSfx.currentTime=0;
    }
}

});

SlotMachine2.addEventListener("click", ()=>{
if(clickCount >= costOfSlotMachine){
    clickCount-= costOfSlotMachine;
    clicksDisplaied();
    let chance = Math.random();
    if (chance < .1){
    slotMachineInnerText.innerText="Great Plunder!!! you Win Rare prize, keep spinning for 100 clicks?";
    slotMachineWinSfx.play();
    slotMachineWinSfx.currentTime=0;
}
        else{
        slotMachineInnerText.innerText="you Lose, try again for 100 clicks?";
        slotMachineLoseSfx.play();
        slotMachineLoseSfx.currentTime=0;
    }
}

});