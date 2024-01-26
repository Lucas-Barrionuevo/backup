import { check } from 'express-validator';
import errorCodes from '../../../constants/errorCodes';

const { SERVER_NUMBER_NOT_FOUND } =
  errorCodes;

export const validatePrice = check('price')
  .exists()
  .withMessage(SERVER_NUMBER_NOT_FOUND)
  .isLuhnNumber()
  .withMessage(SERVER_NUMBER_NOT_FOUND)
