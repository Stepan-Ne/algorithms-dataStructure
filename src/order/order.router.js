const orderController = require("./order.controller")

const useRouter = (app) => {
    app.post('/order', orderController.placeOrder)
}

module.exports = useRouter
