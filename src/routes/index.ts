import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const route = Router();

route.get('/', PageController.home);
route.get('/dogs', PageController.home);
route.get('/cats', PageController.home);
route.get('/fishes', PageController.home);

route.get('/search', SearchController.search);


export default route;