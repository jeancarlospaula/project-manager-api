const Category = require("../models/categories.model");

class CategoryController {
    static async insert(req, res){
        try {
            const { _id, name, userId } = await Category.create(req.body)

            return res.status(201).json({message: 'Category created successfully', data: {_id, name, userId}})
        } catch (error) {
            console.log(error)
            return res.status(400).json({error: 'Category insertion failed'})
        }
    }

    static async findUserCategories(req, res){
        try {            
            const userId = req.body.userId
            const categories = await Category.find({userId}).select('-__v')
    
            return res.status(200).json(categories)
        } catch (error) {
            console.log(error)
            return res.status(404).json({error: 'No category found'})
        }
    }
}

module.exports = CategoryController