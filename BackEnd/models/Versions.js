const {Schema,model} = require('mongoose');

const versionSchema = Schema({

    version:{
        type: String,
        require: [true, 'The version is necesary']
    },
    edition:{
        type: String,
        require: [true, 'The edition is necesary'],
        enum: ['Xbox','Switch','Play','Java','Bedrock','Windows']
    }
   
})

module.exports = model('versions', versionSchema);