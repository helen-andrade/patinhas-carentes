import { Router } from 'express';
import getOngsController from '@controllers/ongs/getOngsController';
import getAllAnimalsController from '@controllers/animals/getAllAnimalsController';

const router = Router();

router.get('/ongs/:id?', getOngsController);
router.get('/ongs/:ongId/animals', getAllAnimalsController);

export default router;
