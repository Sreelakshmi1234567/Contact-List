const mongoose=require("mongoose")
const contactlistschema=mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    
});
const contactlistModel = mongoose.model("List",contactlistschema)
module.exports = contactlistModel;