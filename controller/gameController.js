const Game = require("../models").game
module.exports = {
    async getAllGames(req, res) {
        try {
            const gameCollection = await Game.findAll()
            res.status(201).send(gameCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async getAllGamesByCategory(req, res) {
        let category = req.params.id
        try {
            const gameCollection = await Game.findAll({
                where: {
                    category: category
                }
            })
            res.status(201).send(gameCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async getAllGamesByConsole(req, res) {
        let console = req.params.id
        try {
            const gameCollection = await Game.findAll({
                where: {
                    console: console
                }
            })
            res.status(201).send(gameCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async getGameById(req, res) {
        let gameId = req.params.id
        try {
            const game = await Game.findOne({
                where: {
                    id: gameId
                }
            })
            res.status(201).send(game)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async createGame(req, res) {
        try {
            const gameCollection = await Game.create({
                name: req.body.name,
                picture: req.body.picture,
                category: req.body.category,
                console: req.body.console,
                description: req.body.description,
            })
            res.status(201).send(gameCollection)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },
    async updateGame(req, res) {
        try {
            const gameCollection = await Game.findOne({
                where: {
                    id: req.params.id
                }
            })
            let values = {
                name: req.body.name,
                picture: req.body.picture,
                category: req.body.category,
                console: req.body.console,
                description: req.body.description };
            let where = { where: { id: req.params.id }};
            if (gameCollection) {
                const updatedGame = await Game.update(values,where)
                res.status(201).send(updatedGame)
            } else {
                res.status(404).send("Game Not Found")
            }
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
}
