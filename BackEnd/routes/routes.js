const {Router} = require('express')

const { getAll,getByID, getByName, getMorePopular, getLessPopular, post, updateById, deleteById, getDescriptionByCode } = require('../controllers/controllers');


const router = Router();

router.get('/getAll', getAll)
.get('/get/:query', getByID)
.get('/getByName/:query', getByName)
.get('/getByVersion/:query', getByName)
.get('/getByCode/:query', getByName)
.get('/getByCategory/:query', getByName)
.get('/getDescriptionByCode/:query', getDescriptionByCode)

.get('/getByShader/:query', getByName)
.get('/getMorePopular', getMorePopular)
.get('/getLessPopular', getLessPopular)
.post('/post', post)
.patch('/update/:query', updateById)
.delete('/delete/:query', deleteById)



.get('/getIp', getByName)
.get('/getAccess', getByName)
.get('/getCapacity', getByName)
.get('/getPlataform', getByName)

module.exports = router;