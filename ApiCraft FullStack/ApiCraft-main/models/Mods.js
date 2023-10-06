const {Schema,model} = require('mongoose');

const modsSchema = Schema({

    nombre:{
        type: String,
        require: [true, "The name is obligatory"]
    },
    version:{
        type: String,
        require: [true, "The version is obligatory"]
    },
    codigo:{
        type: String,
        require: [true, "The code is obligatory"]
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

module.exports = model('mods', modsSchema)