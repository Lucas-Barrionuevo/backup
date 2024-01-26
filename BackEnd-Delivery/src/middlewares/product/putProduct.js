import { StatusCodes } from 'http-status-codes';
import { put } from '../../services/productService';
export const putProduct = async (req,res,next) => {
    const { oldName, ...rest } = req.body

    
    const productDB = await put({name: oldName}, {
        ...rest
    });
    
    res.status(StatusCodes.OK).send({
        message: 'Producto actualizado',
        data: {
            ...productDB.toJSON(),
            ...rest
        }
    })
}