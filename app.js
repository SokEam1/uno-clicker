const MakeInput = document.getElementById("amount-of-card");
const MakeButton = document.getElementById("create");
const AutoCounterButton = document.getElementById("auto")
const MultiplierButton = document.getElementById("multiplier")
const CardCounter = document.getElementById("card-per-click");
const AutoClickCounter = document.getElementById("number-of-cards")
const MultiplierCounter = document.getElementById("multiplier-count")
const AutoCost = document.getElementById("auto-clicker-price")
const MultiCost = document.getElementById("click-multipplier-price")
const About = document.querySelector(".modal-about")
const AboutButton = document.getElementById("abtBtn")
const Inspiration = document.querySelector(".modal-ins")
const InspirationButton = document.getElementById("insBtn")
const Contact = document.querySelector(".modal-contact")
const ContactButton = document.getElementById("conBtn")
const restarting = document.getElementById("reset")


let card = new UnoCard();

MakeInput.value = card.getCardCount();
card.startTake()

MakeButton.addEventListener("click", function(){
    card.cardCounter();
    MakeInput.innerText = card.getCardCount();
    console.log(card.cardCount)
});

let refreshIntervalId = setInterval(updateCardCount, 1000);

AutoCounterButton.addEventListener("click", function(){
    card.cardAutoCounter();
    card.autoClickerNew(); 
    console.log("working", card)
})

MultiplierButton.addEventListener("click", function(){
    card.cardMultiplierBuy(); 
    card.cardMultiplierNew();

})

function updateCardCount(){
    CardCounter.innerText = card.getCardsTotal();
    MakeInput.innerText = card.getCardCount();
    AutoClickCounter.innerText = card.getAutoClickerCount();
    MultiplierCounter.innerText = card.getMultiplierCount();
    AutoCost.innerText = card.getAutoClickerCost();
    MultiCost.innerText = card.getMultiplierCost();
    checkAutoCount();
    checkMultiplierCount();
}

function checkAutoCount(){
    if(card.getCardCount() >= card.autoClickerCost){
        AutoCounterButton.hidden = false;
    }else {
        AutoCounterButton.hidden = true;
    }
}

function checkMultiplierCount(){
    if(card.getCardCount() >= card.multiplierCost){
        MultiplierButton.hidden = false;
    }else {
        MultiplierButton.hidden = true;
    }
}

AboutButton.onclick = function(){
    About.style.display = "block";
}

InspirationButton.onclick = function(){
    Inspiration.style.display = "block";
}

ContactButton.onclick = function(){
    Contact.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == About) {
        About.style.display = "none";
    }
    if (event.target == Inspiration) {
        Inspiration.style.display = "none";
    }
    if (event.target == Contact) {
        Contact.style.display = "none";
    }
}

restarting.addEventListener("click", function(){
    location.reload();
})

function autoCounter(){
    for (let i = 0; i < card.autoClickerCount; i++){
        card.cardCounter();
    }
    updateCardCount();
}

setInterval(autoCounter, 1000)