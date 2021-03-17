import expressValidator from 'express-validator';
import locales from '../../../locales/en.json';

const { INVALID_USER } = locales.post.responses;
const { check } = expressValidator;

const validateAuthorIsLoggedUser = check('author')
    .custom((authorId, {req, loc, path}) => {
        if (req.user._id !== authorId) {
            throw new Error(INVALID_USER);
        }
        return true;
    })

export default validateAuthorIsLoggedUser;