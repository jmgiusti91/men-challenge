import expressValidator from 'express-validator';

const { check } = expressValidator;

const validateCommentExists = check('comment')
    .exists()
    
export default validateCommentExists;