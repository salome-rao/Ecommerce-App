const mongoose = require("mongoose")
const {Schema} = mongoose;
const ItemSchema = new Schema(
    {
        CategoryName:{
            type:String,
            required:true
        }
    }
);
module.exports = mongoose.model('Item',ItemSchema)