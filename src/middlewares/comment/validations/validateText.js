import expressValidator from 'express-validator';
import { MAX_TEXT_LENGTH } from "../../../models/comment";
import locales from '../../../locales/en.json';

const { MAX_LENGTH } = locales.comment.validations;
const { check } = expressValidator;

const validateText = check('comment.text')
    .exists()
    .isLength({ max: MAX_TEXT_LENGTH }).withMessage(`${MAX_LENGTH} ${MAX_TEXT_LENGTH} characters`)
    
export default validateText;