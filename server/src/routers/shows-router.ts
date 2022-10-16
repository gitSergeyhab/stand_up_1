import { Router } from 'express'
import { showsController } from '../controllers/shows-controller';

const showsRouter =  Router();

showsRouter.get('/', showsController.getShowById);
showsRouter.get('/query', showsController.getShowsByQuery);
showsRouter.get('/search', showsController.searchShowsByNames);


showsRouter.get('/:id', showsController.getShowById);





export { showsRouter };