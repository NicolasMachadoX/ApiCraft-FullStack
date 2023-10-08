const {Schema,model} = require('mongoose');

const userSchema = Schema({

    name:{
        type: String,
        require: [true, 'The name is obligatory']
    },
    password:{
        type: String,
        require: [true, 'The password is obligatory']
    },
    email:{
        type: String,
        require: [true, 'The email is obligatory']
    },
    account:{
        type: String,
        enum: ['premium', 'noPremium'],
        require: [true, 'The account is obligatory']
    },
    status:{
        type: String,
        require: [true, 'The status is obligatory']
    },
    skin:{
        type: String

    }

})

module.exports = model('users', userSchema)