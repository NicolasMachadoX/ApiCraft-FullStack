const {Schema,model} = require('mongoose');

const skinsSchema = Schema({

    nombre:{
        type: String,
        require: [true, "The name it's obligatory"]
    },
    codigo:{
        type: String,
        require: [true, "The code it's obligatory"]
    },
    image:{
        type: String,
        require: [true, "The image it's obligatory"]
    },
    description:{
        type: String,
    },
    category:{
        type: String,
        require: [true, "The category is obligatory"]
    },
    downloads:{
        type: String
    }
   
})

module.exports = model('skins', skinsSchema);