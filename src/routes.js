import { Router } from 'express';
import ContractController from './app/controllers/ContactController.js';

const router = Router();

router.get(
  '/contacts',
  (_req, _res, next) => {
    console.log('passou pelo middleware');
    next();
  },
  ContractController.index
  );

router.get('/contacts/:id', ContractController.show);
router.delete('/contacts/:id', ContractController.delete);
router.post('/contacts', ContractController.store);


export default router;
