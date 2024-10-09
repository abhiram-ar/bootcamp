const PizzaShop = require("./pizzashop")

const shop = new PizzaShop()


shop.on('order', (item)=>{
    console.log("an order has been placed, oderItem =:" + item )
})

shop.order("mushrom")
shop.displayOrderNumber()
shop.order("carrft")
shop.displayOrderNumber()
