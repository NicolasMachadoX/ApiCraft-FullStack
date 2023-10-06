const {Router} = require('express')

const { getAll,getByID, getByName,getByIp,getByAcess,getByCapacity,
     getByVersion,getByCode, getMorePopular, getLessPopular, getByCategory,
      post, updateById, deleteById, getDescriptionByCode,
       getCollection, getByShaders, getByPlataform } = require('../controllers/controllers');


const router = Router();

router.get('/getAll', getAll)
.get('/get/:query', getByID)
.get('/getByName/:query', getByName)
.get('/getByVersion/:query', getByName)
.get('/getByCode/:query', getByName)
.get('/getByCategory/:query', getByName)
.get('/getDescriptionByCode/:query', getDescriptionByCode)

.get('/getByShader', getByShaders)
.get('/getMorePopular', getMorePopular)
.get('/getLessPopular', getLessPopular)
.get('/info', getCollection)
.post('/post', post)
.patch('/update/:query', updateById)
.delete('/delete/:query', deleteById)



.get('/getIp', getByIp)
.get('/getAccess', getByAcess)
.get('/getCapacity', getByCapacity)
.get('/getPlataform', getByPlataform)

module.exports = router;