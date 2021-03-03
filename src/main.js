const app = require("./app")

const main = () => {
    const PORT = 8080;
    app.listen(PORT, () => {
        console.log("Server is running on port ", PORT)
    })
}

module.exports = main
