import { Router } from 'express';
import getOngsController from '@controllers/ongs/getOngsController';
import getAllAnimalsController from '@controllers/animals/getAllAnimalsController';
import getAnimalController from '@controllers/animals/getAnimalController';

const router = Router();

router.get('/ongs/:id?', getOngsController);
router.get('/ongs/:ongId/animals', getAllAnimalsController);
router.get('/ongs/:ongId/animals/:animalId', getAnimalController);

export default router;
