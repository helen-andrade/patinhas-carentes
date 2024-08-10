import { Router } from 'express';
import getOngsController from '@controllers/ongs/getOngsController';

const router = Router();

router.get('/ongs/:id?', getOngsController);

export default router;
