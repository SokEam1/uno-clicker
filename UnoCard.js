class UnoCard {
    constructor(){
        this.cardCount = 100;
        this.autoClickerCount = 0;
        this.multiplierCount = 0;
        this.autoClickerCost = 100;
        this.multiplierCost = 10;
        this.cardsTotal = 1;
        this.take = undefined;
    }
    
    cardCounter(){
        this.cardCount += this.cardsTotal;
    }

    cardAutoCounter(){
        this.cardCount = Math.round(this.cardCount - this.autoClickerCost);
        this.autoClickerCount +=1;
      
    }
    autoClickerNew(){
      this.autoClickerCost = this.autoClickerCost * 1.1;
     }

    cardMultiplierNew(){  
        this.multiplierCost = this.multiplierCost * 1.1; 
     }

    cardMultiplierBuy(){
        this.cardCount = Math.round(this.cardCount - this.multiplierCost);
        this.cardsTotal = this.cardsTotal * 1.2;
        this.multiplierCount +=1;
    }
    
    getCardCount(){
        return Math.round(this.cardCount);
    }

    getCardsTotal(){
        return Math.round(this.cardsTotal);
    }
    
    getAutoClickerCount(){
        return this.autoClickerCount;
    }
    getMultiplierCount(){
        return this.multiplierCount;
    }
    getAutoClickerCost(){
        return Math.round(this.autoClickerCost)
    }
    getMultiplierCost(){
        return Math.round(this.multiplierCost)
    }

    startTake(){
        if (this.take == undefined)
{
        this.take = self.setInterval(this.take, 5000) 
}    }

    take = () => {
        if(this.cardCount > 0){
            this.cardCount -=1;
        }
    }

}