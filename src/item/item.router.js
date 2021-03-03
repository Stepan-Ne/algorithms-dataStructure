const itemController = require("./item.controller")

const useRouter = (app) => {
    app.get('/item', itemController.getItemList)
}

module.exports = useRouter
