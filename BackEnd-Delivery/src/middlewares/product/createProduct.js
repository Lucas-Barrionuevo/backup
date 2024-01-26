import { StatusCodes } from 'http-status-codes';
import { create } from '../../services/productService';
export const createProduct = async (req,res,next) => {

    const newProduct = req.body;

    const productDB = await create(newProduct);

    res.status(StatusCodes.CREATED).send(productDB);

}
