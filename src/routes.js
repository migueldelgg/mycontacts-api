import { Router } from 'express';
import ContractController from './app/controllers/ContactController.js';

const router = Router();

router.get('/contacts', ContractController.index);
router.get('/contacts/:id', ContractController.show);
router.delete('/contacts/:id', ContractController.delete);

export default router;
