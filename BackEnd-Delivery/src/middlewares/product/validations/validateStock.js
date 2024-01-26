import { check } from 'express-validator';
import errorCodes from '../../../constants/errorCodes';

const { SERVER_NUMBER_NOT_FOUND } =
  errorCodes;

export const validateStock = check('stock')
  .exists()
  .withMessage(SERVER_NUMBER_NOT_FOUND)
  .isNumeric()
  .withMessage(SERVER_NUMBER_NOT_FOUND)