//index.js
const gameController = require("../controller").game
module.exports = app => {
    app.get("/game", gameController.getAllGames)
    app.get("/game/category/:id", gameController.getAllGamesByCategory)
    app.get("/game/console/:id", gameController.getAllGamesByConsole)
    app.get("/game/:id", gameController.getGameById)
    app.post("/game", gameController.createGame)
    //app.put("/game/:id", gameController.updateGame)
    //app.delete("/game/:id", gameController.deleteGame)

    /*app.get("/console", consoleController.getAllConsoles)
    app.get("/console/brand/:id", consoleController.getAllConsolesByBrand)
    app.get("/console/:id", consoleController.getConsoleById)
    app.post("/console", consoleController.createConsole)
    app.put("/console/:id", consoleController.updateConsole)
    app.delete("/console/:id", consoleController.deleteConsole)

    app.get("/category", categoryController.getAllCategories)
    app.get("/category/:id", categoryController.getCategoryById)
    app.post("/category", categoryController.createCategory)
    app.put("/category/:id", categoryController.updateCategory)
    app.delete("/category/:id", categoryController.deleteCategory)*/
}
