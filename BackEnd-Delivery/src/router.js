import express from 'express';
import { statusRouter } from './routes';
import { productRouter } from './routes/productRouter';

const router = express.Router();

router.use('/status', statusRouter);

router.use('/product', productRouter)

export default router;
