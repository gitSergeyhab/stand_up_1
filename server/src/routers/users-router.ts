import {Router} from 'express'
import { userController } from '../controllers/users-controller';

const userRouter =  Router();

// userRouter.get('/', userController.getUsers);
userRouter.get('/auth', userController.auth);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/registration', userController.registerUser);
userRouter.post('/login', userController.loginUser);
userRouter.post('/logout', userController.logoutUser);








export {userRouter};