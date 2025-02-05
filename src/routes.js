import { Router } from 'express';

import ContractController from './app/controllers/ContactController.js';
import CategoryController from './app/controllers/CategoryController.js';

const router = Router();

// contact domain
router.get('/contacts', ContractController.index);
router.get('/contacts/:id', ContractController.show);
router.post('/contacts', ContractController.store);
router.delete('/contacts/:id', ContractController.delete);
router.put('/contacts/:id', ContractController.update);

// contact domain
router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show)
router.post('/categories', CategoryController.store);
router.delete('/categories/:id', CategoryController.delete)
router.put('/categories/:id', CategoryController.update);

export default router;
