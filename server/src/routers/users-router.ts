import {Router} from 'express'
import { userController } from '../controllers/users-controller';
import { asyncHandler } from '../middlewares/async-handler';
import { userValidate } from '../middlewares/user-validate';

const userRouter =  Router();

// userRouter.get('/', userController.getUsers);
// userRouter.get('/auth', userController.auth);
userRouter.get('/:id', userController.getUserById);

userRouter.post('/registration', userValidate, asyncHandler(userController.registration));
userRouter.post('/login', asyncHandler(userController.login));
userRouter.post('/logout', asyncHandler(userController.logout));

userRouter.get('/activate/:link', asyncHandler(userController.activate));

userRouter.get('/refresh', asyncHandler(userController.refreshToken));









export {userRouter};