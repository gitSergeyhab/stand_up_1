import { Router } from 'express';
import { comedianRouter } from './comedians-router';
import { userRouter } from './users-router';

const router =  Router();

router.use('/users', userRouter);
router.use('/comedians', comedianRouter);


export { router };