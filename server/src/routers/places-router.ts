import { Router } from 'express'
import { placesController } from '../controllers/places-controller';

const placesRouter =  Router();

placesRouter.get('/', placesController.getPlacesByQuery);
placesRouter.get('/search', placesController.searchPlacesByNames);
placesRouter.get('/:id', placesController.getPlaceById);


export { placesRouter };