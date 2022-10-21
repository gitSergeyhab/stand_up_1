import { Router } from 'express'
import { comedianController } from '../controllers/comedians-controller';

const comedianRouter =  Router();

comedianRouter.get('/', comedianController.getComedianByLocation);
comedianRouter.get('/search', comedianController.searchComedianByNames);

comedianRouter.get('/:id', comedianController.getComedianById);


export { comedianRouter };