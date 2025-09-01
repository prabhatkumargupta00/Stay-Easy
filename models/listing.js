const mongoose = require("mongoose")

const schema = mongoose.Schema;

const listingSchema = new schema({
    title :{
        type: String,
        required : true
    },
    description :{
        type : String
    },
    image : {
        type : String,
        set: (v) => v === ""
            ? "https://www.shutterstock.com/image-vector/house-logo-template-design-vector-600nw-741515455.jpg" 
        : v,
        default: "https://www.shutterstock.com/image-vector/house-logo-template-design-vector-600nw-741515455.jpg"
    },
    price : {
        type : Number
    },
    location : {
        type : String
    },
    country : {
        type : String
    }
})

const Listing = mongoose.model("Listing" , listingSchema)

module.exports = Listing;





