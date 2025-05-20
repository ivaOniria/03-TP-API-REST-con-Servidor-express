
class ModelMem {
    #libros

    constructor() {
        this.#libros = [
            { id: '1', titulo: 'En medio de Spinoza', autor: 'Gilles Deleuze', anio: 2003 },
            { id: '2', titulo: 'El secreto de la flor de Oro', autor: 'Richard Wilhelm', anio: 1929 },
            { id: '3', titulo: 'Crónicas del ángel gris', autor: 'Alejandro Dolina', anio: 1987 },
            { id: '4', titulo: 'Mil mesetas', autor: 'Gilles Deleuze y Félix Guattari', anio: 1980 },
            { id: '5', titulo: 'Viaje a Ixtlan', autor: 'Carlos Castaneda', anio: 1972 },
            { id: '6', titulo: 'Nuestra parte de Noche', autor: 'Mariana Enríquez', anio: 2019 },
            { id: '7', titulo: 'El fin de la Eternidad', autor: 'Isaac Asimov', anio: 1987 },
            { id: '8', titulo: 'Bovedas de Acero', autor: 'Isaac Asimov', anio: 1953 },
            { id: '9', titulo: 'La casa y el Cosmos', autor: 'Simone Borghi', anio: 2014 },
            { id: '10', titulo: 'Lineas de Fuega', autor: 'Félix Guattari', anio: 1979 }
        ]
    }

    obtenerLibros = async () => this.#libros

    obtenerLibro = async id => {
        const libro = this.#libros.find(l => l.id === id)
        return libro || {}
    }

    guardarLibro = async libro => {
        libro.id = String(parseInt(this.#libros[this.#libros.length - 1]?.id || 0) + 1)
        this.#libros.push(libro)
        return libro
    }

    actualizarLibro = async (id, libro) => {
        const index = this.#libros.findIndex(l => l.id === id)
        if (index != -1) {
            const libroAnt = this.#libros[index]
            const libroAct = { ...libroAnt, ...libro }
            this.#libros.splice(index, 1, libroAct)
            return libroAct
        }
        else {
            return null
        }
    }

    borrarLibro = async id => {
        const index = this.#libros.findIndex(l => l.id === id)
        if (index != -1) {
            const libro = this.#libros.splice(index, 1)[0]
            return libro
        }
        else {
            return null
        }
    }
}

export default ModelMem