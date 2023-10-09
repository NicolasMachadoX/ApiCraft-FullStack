const mongoose = require('mongoose');

const dbConnection = async () =>{
    try {
     await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true
     }) 
     console.log('db inicializate');
    } catch (error) {
        console.log(error);
        throw new Error('DB CANT INICIALIZATE')
    }


}

module.exports = dbConnection;