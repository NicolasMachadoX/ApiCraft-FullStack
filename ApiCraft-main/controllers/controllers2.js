const Collection = require('../models/Users.js')

const getAll = async (req, res) => {
    try {
        const Collection = await getCollection();
        const data = 'hola uwu';
        res.json({ data: data, msg: Collection });
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}





module.exports = {
    getAll

}