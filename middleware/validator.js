'use strict'

const { body, validationResult } = require('express-validator');

const validator = {}
// Supplier Validation
validator.validateSupplier = [
    body('supplierName').trim().notEmpty().withMessage('Supplier name is required'),
    body('contactPerson').trim().notEmpty().withMessage('Contact person is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('phone').trim().notEmpty().withMessage('Phone number is required'),
    body('address').trim().notEmpty().withMessage('Address is required'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false,
                errors: errors.array() 
            });
        }
        next();
    }
];

// Product Validation
validator.validateProduct = [
    body('productName').trim().notEmpty().withMessage('Product name is required'),
    body('sku').trim().notEmpty().withMessage('SKU is required'),
    body('price').isFloat({ min: 1 }).withMessage('Price must be greater than 0'),
    body('quantityInStock').isInt({ min: 1 }).withMessage('Quantity in stock must be at least 1'),
    body('category').trim().notEmpty().withMessage('Category is required'),
    body('supplierId').notEmpty().withMessage('Supplier ID is required'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false,
                errors: errors.array() 
            });
        }
        next();
    }
];

module.exports = validator;