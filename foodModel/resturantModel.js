const mongoose = require("mongoose")

const RestSchema = new mongoose.Schema(
    {
        branch:{
            type: String, 
            required:[true, "please fill your branch"],
            unique: true },

        refuelMax:{
            type: Object
        },
        refuel:{
            type: Object
        },
        refueldodo:{
            type: Object
        },
        chickwizz:{
            type: Object
        },
        chickwizzmeal:{
            type: Object
        },

    }, {timestamps:true}
)

const restModel = mongoose.model("chicken", RestSchema)

module.exports = restModel