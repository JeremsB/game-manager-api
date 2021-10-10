//index.js
const gameController = require("../controller").game
module.exports = app => {
    app.get("/api", (req, res) => {
        res.status(200).send({
            data: "Welcome Node Sequlize API v1",
        })
    })
    app.get("/api/games", gameController.getAllUsers)
}
