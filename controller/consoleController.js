const Console = require("../models").console

module.exports = {
    async getAllConsoles(req, res) {
        try {
            const consoleCollection = await Console.findAll()
            res.status(201).send(consoleCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async getConsoleById(req, res) {
        let consoleId = req.params.id
        try {
            const console = await Console.findOne({
                where: {
                    id: consoleId
                }
            })
            res.status(201).send(console)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
}
