import expressValidator from 'express-validator';
import locales from '../../../locales/en.json';

const { param } = expressValidator;
const { INVALID_ID } = locales.common.validations;

const validateParamId = (id) => {
    return [
        param(id)
            .isMongoId().withMessage(`${INVALID_ID}`)
    ]
}

export default validateParamId