const Game = require("../models").game
const Category = require("../models").category

module.exports = {
    async getAllCategories(req, res) {
        try {
            const categoryCollection = await Category.findAll()
            res.status(201).send(categoryCollection)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
    async getCategoryById(req, res) {
        let categoryId = req.params.id
        try {
            const category = await Category.findOne({
                where: {
                    id: categoryId
                }
            })
            res.status(201).send(category)
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    },
}
