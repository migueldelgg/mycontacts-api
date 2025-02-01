import { Router } from 'express';
import ContractController from './app/controllers/ContactController.js';

const router = Router();

router.get('/contacts', ContractController.index)

export default router;
