import { param } from 'express-validator';

const validateParamId = (id) => {
    return [
        param(id)
            .isMongoId()
    ]
}

export default validateParamId