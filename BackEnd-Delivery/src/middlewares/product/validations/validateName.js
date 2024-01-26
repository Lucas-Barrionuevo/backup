import { check } from 'express-validator';
import errorCodes from '../../../constants/errorCodes';
import { NAME_MAX_LENGTH, ELEMENT_MIN_LENGTH} from '../../../models/product';
const { SERVER_NAME_NOT_FOUND, SERVER_NAME_TOO_SHORT, SERVER_NAME_TOO_LONG } =
  errorCodes;

export const validateName = check('name')
  .exists()
  .withMessage(SERVER_NAME_NOT_FOUND)
  .isLength({ min: ELEMENT_MIN_LENGTH })
  .withMessage(SERVER_NAME_TOO_SHORT)
  .isLength({ max: NAME_MAX_LENGTH })
  .withMessage(SERVER_NAME_TOO_LONG);
