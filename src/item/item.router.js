const useRouter = (app) => {
    app.get('/item', function (req, res) {
        res.send([{id: 1, name: "Pepperoni"}])
    })
}
