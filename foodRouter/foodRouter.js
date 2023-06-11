const express = require("express")
const router = express.Router()

const {foodMenu, getAll, getOne, updateMenu} = require("../foodCotroller/foodController")

router.get("/", (req, res)=>{
    res.send("Welcome to my food API Homepage")
})
router.post("/create", foodMenu)
router.get("/all", getAll)
router.get("/getOne/:branch", getOne)
router.patch("/update/:branch", updateMenu)

module.exports = router