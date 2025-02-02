import { Router } from 'express';
import { createProfession, deleteProfession, getAllProfessions, updateProfession } from '../controllers/profesionsController';

const router = Router();
router.post('/', createProfession);
router.get('/', getAllProfessions);
router.put('/:id', updateProfession);
router.delete('/:id', deleteProfession);
export default router;
