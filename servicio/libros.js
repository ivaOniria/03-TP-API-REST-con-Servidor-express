import ModelMem from '../model/DAO/librosMem.js'
import { validar, validarParcial } from './validaciones/libros.js'

class Servicio {
    #model

    constructor() {
        this.#model = new ModelMem();
    }

    obtenerLibros = async id => {
        if(id) {
            const libro = await this.#model.obtenerLibro(id)
            return libro
        }
        else {
            const libros = await this.#model.obtenerLibros()
            return libros
        }
    }

    guardarLibro = async libro => {
        const res = validar(libro)
        if(res.result) {
            const libroGuardado = await this.#model.guardarLibro(libro)
            return libroGuardado
        }
        else {
            throw new Error(res.error.details[0].message)
        }
    }

    actualizarLibro = async (id, libro) => {
    const res = validarParcial(libro)
    if (res.result) {
        const libroActualizado = await this.#model.actualizarLibro(id, libro)
        return libroActualizado
    } else {
        throw new Error(res.error.details[0].message)
    }
}

    borrarLibro = async id => {
        const libroEliminado = await this.#model.borrarLibro(id)
        return libroEliminado
    }
}

export default Servicio