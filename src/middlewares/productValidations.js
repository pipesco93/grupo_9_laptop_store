// Validaciones

const { body } = require('express-validator');
<<<<<<< HEAD
=======
const path = require('path');
>>>>>>> a3f1dbbb20dce51e01531e594ca173011634fa8e

const validateCreate = [
    body('referencia')
        .notEmpty()
<<<<<<< HEAD
        .isLength({min: 5})
        .withMessage('Ingresar un nombre'),
=======
        .withMessage('Ingresar un nombre')
        .isLength({min: 5})
        .withMessage('Nombre minimo 5 caracteres'),
>>>>>>> a3f1dbbb20dce51e01531e594ca173011634fa8e
    
    body('spec')
        .notEmpty()
        .withMessage('Debes ingresar una descripcion')
        .bail()
        .isLength({min: 20})
        .withMessage('Debe ingresar 20 caracteres como minimo'),
    
    body('image')
        .custom((value, {req} ) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif']
     
        if(!file){
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}` );
    
            }

        }

        return true
    })
];

const validateEdit = [
    body('referencia')
        .notEmpty()
        .withMessage('Debes ingresar una referencia'),
    
    body('product')
        .notEmpty()
        .withMessage('Ingresar un nombre'),

    body('description')
        .notEmpty()
        .withMessage('Debes ingresar una descripcion')
        .bail()
        .isLength({min: 20})
        .withMessage('Debe ingresar 20 caracteres como minimo'),

<<<<<<< HEAD
    body('img')
        .custom((value, {req} ) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif']
     
=======
    body('image')
        .custom((value, {req} ) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']

>>>>>>> a3f1dbbb20dce51e01531e594ca173011634fa8e
        if(!file){
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}` );
<<<<<<< HEAD
    
=======

>>>>>>> a3f1dbbb20dce51e01531e594ca173011634fa8e
            }

        }

        return true
    })
];

const productValidations = {
    validateCreate,
    validateEdit
}

module.exports = productValidations;