// Validaciones

const { body } = require('express-validator');

const validateCreate = [
    body('referencia')
        .notEmpty()
        .isLength({min: 5})
        .withMessage('Ingresar un nombre'),
    
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

    body('img')
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

const productValidations = {
    validateCreate,
    validateEdit
}

module.exports = productValidations;