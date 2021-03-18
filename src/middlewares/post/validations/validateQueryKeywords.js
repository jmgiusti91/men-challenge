import { query } from 'express-validator';
import locales from '../../../locales/en.json';

const { KEYWORDS_NOT_EXISTS, KEYWORDS_IS_EMPTY } = locales.post.validations;

const validateQueryKeywords = [
    query('keywords')
        .exists().withMessage(`${KEYWORDS_NOT_EXISTS}`).bail()
        .notEmpty().withMessage(`${KEYWORDS_IS_EMPTY}`)
]

export default validateQueryKeywords