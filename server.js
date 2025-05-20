import express from 'express'
import Routerlibros from './router/libros.js'

class Server {
    #port
    #persistencia

    constructor(port, persistencia) {
        this.#port = port
        this.#persistencia = persistencia
    }

    start() {
        // -----------------------------------------------
        //             APLICACIÓN EXPRESS
        // -----------------------------------------------
        const app = express()

        // -----------------------------------------------
        //            MIDDLEWARES EXPRESS
        // -----------------------------------------------
        app.use(express.static('public'))
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))

        // -----------------------------------------------
        //           API RESTful: libros
        // -----------------------------------------------
        app.use('/api/libros', new Routerlibros(this.#persistencia).start())

        // -----------------------------------------------
        //        LISTEN DEL SERVIDOR EXPRESS
        // -----------------------------------------------
        const PORT = this.#port
        const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server