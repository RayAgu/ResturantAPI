
const foodModel = require("../foodModel/resturantModel")

//function to reacte a food menu
async function foodMenu(req, res){
    try{
       const menu = await foodModel.create(req.body)
        res.status(200).json({
            message: `The menu for the ${menu.branch} has been created`,
            data: menu
        })

    } catch (error){
        res.status(400).json(error.message)
    }
}

//To Get all
async function getAll(req, res){
    try{
        const getall = await foodModel.find()
        res.status(200).json({
            message: "This are available food resturance: " + getall.length,
            data: getall
        })
    } catch (error){
        res.status(401).json(e.message)
    }
}

//get by name
const getOne = async(req, res)=>{
    try{
        const branch = req.params
        const One = await foodModel.findOne(branch)
        res.status(200).json({data:One})
    } catch (error){
        res.status(401).json(error.message)
    }
}

    //update menu

const updateMenu = async(req, res)=>{
    try{
        const TheRestaurant = await foodModel.findById(req.params.id)
        const product = await foodModel.updateOne(
            {"refuelMax.main": TheRestaurant.refuelMax.amin},
            {$set:{"refuel.main": req.body.refuel, 
            "refuelMax.main": req.body.refuel,
            "refueldodo.main": req.body.refuel,
            "chickwizz.main": req.body.chickwizz,
            "chickwizzmeal.main": req.body.chickwizz,
            "refuel.Protein": req.body.protein,
            "refuelMax.Protein": req.body.protein,}
            }
        )

        const getTheRestaurant = await foodModel.findById(req.params.id)
        res.status(200).json({
            message: `the menu has been updated`,
            data: product, getTheRestaurant
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {foodMenu, getAll, getOne, updateMenu}
