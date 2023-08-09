const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config');
class Server {
    constructor() {
        this.app = express();

        

        this.port = process.env.PORT
        this.paths = {
            campers:  '/api/campers',
            centro:  '/api/centros',
            level:  '/api/levels',
            ruta:   '/api/rutas',
        }
        this.connectDB();
        this.middleware();
        this.routes();
    }
    async connectDB(){
        await dbConnection();
    }
    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.paths.campers, require('../routes/camper.routes.js'));
        this.app.use(this.paths.centro, require('../routes/centro.routes'));
        this.app.use(this.paths.level, require('../routes/level.routes'));
        this.app.use(this.paths.ruta, require('../routes/rutas.routes'));
        }
        listen(){
            this.app.listen(this.port, ()=>{
                            console.log(`Server is running on port : ${this.port}`);
                        })
        }
}


module.exports = Server; 