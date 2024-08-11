import { Router } from 'express';
import getOngsController from '@controllers/ongs/getOngsController';
import getAllAnimalsByOngController from '@controllers/animals/getAllAnimalsByOngController';
import getOneAnimalByOngController from '@controllers/animals/getOneAnimalByOngController';
import createOngController from '@controllers/ongs/createOngController';

const router = Router();

router.post('/ongs', createOngController);
router.get('/ongs/:id?', getOngsController);
router.get('/ongs/:ongId/animals', getAllAnimalsByOngController);
router.get('/ongs/:ongId/animals/:animalId', getOneAnimalByOngController);

export default router;
