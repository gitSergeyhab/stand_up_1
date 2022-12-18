import {Router} from 'express'
import { userController } from '../controllers/users-controller';
import { userValidate } from '../middlewares/user-validate';

const userRouter =  Router();

// userRouter.get('/', userController.getUsers);
// userRouter.get('/auth', userController.auth);
userRouter.get('/:id', userController.getUserById);

userRouter.post('/registration', userValidate, userController.registration);
userRouter.post('/login', userController.login);
userRouter.post('/logout', userController.logout);

userRouter.get('/activate/:link', userController.activate);

userRouter.get('/refresh', userController.refreshToken);









export {userRouter};