import { StatusCodes } from 'http-status-codes';
import { deleteProd } from '../../services/productService';
export const deleteProduct = async (req,res,next) =>{
    const nameProduct = req.body.name;

    await deleteProd({name: nameProduct});

    res.status(StatusCodes.OK).send("Producto eliminado con exito")
}
