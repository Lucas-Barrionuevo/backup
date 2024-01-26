import { NAME_MAX_LENGTH, ELEMENT_MIN_LENGTH } from '../../../models/product';
import errorCodes from '../../../constants/errorCodes';
import { check } from 'express-validator';

export const validateDescription = check('description')
.optional()
.isLength({ min: ELEMENT_MIN_LENGTH })
.withMessage('es muy corto')
.isLength({ max: NAME_MAX_LENGTH })
.withMessage('es muy largo');