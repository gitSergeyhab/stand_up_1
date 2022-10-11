import {Router} from 'express'
import { userController } from '../controllers/users-controller';

const userRouter =  Router();

userRouter.get('/', userController.getUsers);


export {userRouter};