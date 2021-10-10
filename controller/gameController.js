const Game = require("../models").game
module.exports = {
    async getAllUsers(req, res) {
        try {
            const gameCollection = await Game.findOne({
                id: 1
            })
            res.status(201).send(gameCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async create(req, res) {
        try {
            const gameCollection = await Game.create({
                email: req.body.email,
            })
            res.status(201).send(gameCollection)
        } catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    },/*
    async update(req, res) {
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
