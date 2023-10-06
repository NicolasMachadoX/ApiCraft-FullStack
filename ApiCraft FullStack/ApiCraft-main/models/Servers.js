
const {Schema,model} = require('mongoose');

const serversSchema = Schema({

    name:{
        type: String,
        require: [true, 'Dato obligatorio']
    },
    ip:{
        type: String,
        require: [true, 'Dato obligatorio']
    },
    hungerGames:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    bedWars:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    skyWars:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    buildBattle:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    skyBlock:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    survival:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    pvp:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    eggWars:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    creative:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    prision:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    access:{
        type: String,
        enum: ['Premium','noPremium'],
        require: [true, 'Dato obligatorio']
    },
    capacity:{
        type: Number,
        require: [true, 'Dato obligatorio']
    },
    status:{
        type: Boolean,
        require: [true, 'Dato obligatorio']
    },
    version:{
        type: String,
        require: [true, 'Dato obligatorio']
    },
    plataform:{
        type: String,
        enum: ['Bedrock','Java'],
        require: [true, 'Dato obligatorio']
    }

})

module.exports = model('servers', serversSchema)