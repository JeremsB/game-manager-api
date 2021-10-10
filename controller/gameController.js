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
    },/*
    async updateGame(req, res) {
        try {
            const gameCollection = await User.find({
                id: req.params.userId,
            })
            if (userCollection) {
                const updatedUser = await User.update({
                    id: req.body.email,
                })
                res.status(201).send(updatedUser)
            } else {
                res.status(404).send("User Not Found")
            }
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },*/
}
