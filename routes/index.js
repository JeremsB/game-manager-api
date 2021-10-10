//index.js
const gameController = require("../controller").game
module.exports = app => {
    app.get("/game", gameController.getAllGames)
    app.get("/game/:id", gameController.getGameById)
}
