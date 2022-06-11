const Category = require("../models/categories.model");

class CategoryController {
    static async insert(req, res){
        try {

            const { userId } = req
            const categoryName = req.body.name

            if(!categoryName) return res.status(400).json({error: "'name' property is required"})

            const category = {
                name: categoryName,
                userId
            }

            const { _id, name } = await Category.create(category)

            return res.status(201).json({message: 'Category created successfully', data: {_id, name, userId}})
        } catch (error) {
            console.log(error)
            return res.status(400).json({error: 'Category insertion failed'})
        }
    }

    static async findByUserId(req, res){
        try {            
            const { userId } = req
            const categories = await Category.find({userId}).select('-__v')
            
            if(!categories) return res.status(404).json({error: 'No category found'})
    
            return res.status(200).json(categories)
        } catch (error) {
            console.log(error)
            return res.status(404).json({error: 'No category found'})
        }
    }
}

module.exports = CategoryController