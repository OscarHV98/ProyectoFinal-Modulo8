import { Router } from 'express';
import { createOffer, deleteOffer, getAllOffers, updateOffer } from '../controllers/offerController';

const router = Router();
router.post('/', createOffer);
router.get('/', getAllOffers);
router.put('/:id', updateOffer);
router.delete('/:id', deleteOffer);
export default router;
