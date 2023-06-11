const updateMenu = async(req,res)=>{try {
    const TheRestaurant=await foodModel.findById(req.params.id)
const product=await foodModel.updateOne({
     "refuelMax.main":TheRestaurant.refuelMax.main },
   {$set:{"refuel.main":req.body.refuel,"refuelMax.main":req.body.refuel,
   "refuelDodo.main":req.body.refuel,"chickWizz.main":req.body.chickWizz,
   "chickWizzMeal.main":req.body.chickWizz, "refuel.protein":req.body.protein,
   "refuelMax.Protein":req.body.protein,}
} 
   )
 
   const getTheRestaurant=await foodModel.findById(req.params.id)
res.status(200).json(
    {message:`the menu  has been updated`,
data:product,getTheRestaurant}

)
//console.log(product)
//console.log(getTheRestaurant)
   
 } catch (error) { 
    res.status(400).json(error.message)
    
 }
 }

 // const updateMenu = async(req, res) => {
//     try {
//         const product = await foodModel.findOneAndUpdate(req.params).where({"main":"JollofRice"},req.body)
//         res.status(200).json({message: `menu for ${product.branch} is updated`,
//                              data: product})
//     } catch (erro){
//         res.status(400).json({
//             message: "error fetching data"
//         })
//     }
// }