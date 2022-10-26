import { Router } from 'express';
import { comedianRouter } from './comedians-router';
import { countriesRouter } from './countries-router';
import { eventsRouter } from './events-router';
import { placesRouter } from './places-router';
import { showsRouter } from './shows-router';
import { userRouter } from './users-router';

const router =  Router();

router.use('/users', userRouter);
router.use('/comedians', comedianRouter);
router.use('/countries', countriesRouter);
router.use('/shows', showsRouter);
router.use('/places', placesRouter);
router.use('/events', eventsRouter);






export { router };