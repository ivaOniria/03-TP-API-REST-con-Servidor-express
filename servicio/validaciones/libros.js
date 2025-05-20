import Joi from 'joi'

export const validar = libro => {
    const librosSchema = Joi.object({
        titulo: Joi.string().pattern(/^[\p{L} .,'-]+$/u).required(),
        autor: Joi.string().pattern(/^[\p{L} .,'-]+$/u).required(),
        anio: Joi.number().integer().min(1400).max(2025).required()
    })

    const { error } = librosSchema.validate(libro)
    if (error) {
        return { result: false, error }
    }
    return { result: true }
}

// Validaciones para la actualización parcial de un libro (usado en PUT)
export const validarParcial = libro => {
    const librosSchemaParcial = Joi.object({
        titulo: Joi.string().pattern(/^[\p{L} .,'-]+$/u),
        autor: Joi.string().pattern(/^[\p{L} .,'-]+$/u),
        anio: Joi.number().integer().min(1400).max(2025)
    }).min(1)

    const { error } = librosSchemaParcial.validate(libro)
    if (error) {
        return { result: false, error }
    }
    return { result: true }
}


