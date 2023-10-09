const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT

        this.middlewares()
        this.path = {

            user: "/api/users",
            servers: "/api/servers",
            maps: "/api/maps",
            mods: "/api/mods",
            shaders: "/api/shaders",
            textures: "/api/textures",
            skins: "/api/skins",
            version: "/api/versions", 
            control: "/api/control" ,
     
        }


        this.routes()

        this.ConnectionDB();
    }


    async ConnectionDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

   
    routes(){
     
        this.app.use(this.path.user, require('../routes/routes'));
        this.app.use(this.path.servers, require('../routes/routes'));
        this.app.use(this.path.maps, require('../routes/routes'));
        this.app.use(this.path.mods, require('../routes/routes'));
        this.app.use(this.path.shaders, require('../routes/routes'));
        this.app.use(this.path.textures, require('../routes/routes'));
        this.app.use(this.path.skins, require('../routes/routes'));
        this.app.use(this.path.version, require('../routes/routes'));
        this.app.use(this.path.control, require('../routes/routes'));
      

    }


    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server it's running in the port: ${this.port}`);
        })
    }





}

module.exports = Server;