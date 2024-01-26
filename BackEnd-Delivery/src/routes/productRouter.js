import express from 'express';
import { createProduct } from '../middlewares/product/createProduct';
import { getProducts } from '../middlewares/product/getProduct';
import { putProduct } from '../middlewares/product/putProduct';
import { deleteProduct } from '../middlewares/product/deleteProduct';
import { validateDescription } from '../middlewares/product/validations/validateDescription';
import { validateName } from '../middlewares/product/validations/validateName';
import { validatePrice, validateStock } from '../middlewares/product/validations/validateStock';
import runValidations from '../middlewares/common/validations/runValidations';
export const productRouter = express.Router();

const validationName = runValidations([validateName]);

productRouter.get('/',getProducts )
productRouter.post('/', validationName, createProduct)
productRouter.put('/', putProduct)
productRouter.delete('/', deleteProduct)
