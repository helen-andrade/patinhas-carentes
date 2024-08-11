import { Router } from 'express';
import getAllOngsController from '@controllers/ongs/getAllOngsController';
import getAllAnimalsByOngController from '@controllers/animals/getAllAnimalsByOngController';
import getOneAnimalByOngController from '@controllers/animals/getOneAnimalByOngController';
import createOngController from '@controllers/ongs/createOngController';
import getOneOngsController from '@controllers/ongs/getOneOngController';

const router = Router();

router.post('/ongs', createOngController);
router.get('/ongs', getAllOngsController);
router.get('/ongs/:ongId', getOneOngsController);

router.get('/ongs/:ongId/animals', getAllAnimalsByOngController);
router.get('/ongs/:ongId/animals/:animalId', getOneAnimalByOngController);

export default router;
