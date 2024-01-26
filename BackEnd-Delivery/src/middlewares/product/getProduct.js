import { StatusCodes } from 'http-status-codes';
import { find } from '../../services/productService';
export const getProducts = async (req,res,next) => {
    const products = await find({})
    res.status(StatusCodes.OK).send({products})
}