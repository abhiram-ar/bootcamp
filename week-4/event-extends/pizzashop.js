const EventEmitter = require("node:events")

class PizzaShop extends EventEmitter{
    constructor(){
        super()
        this.orderNumber = 0
    }

    order(item){
        console.log("order palcedd");
        this.orderNumber++;
        this.emit('order', item)
    }

    displayOrderNumber(){
        console.log("order num = "  + this.orderNumber )
    }
}

module.exports = PizzaShop;