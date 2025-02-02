import { Router } from 'express';
import { addOfferToUser, getUserOffers } from '../controllers/offerUserController';

const router = Router();

// Ruta para asignar una oferta a un usuario
router.post('/', addOfferToUser);

// Ruta para obtener todas las ofertas de un usuario específico
router.get('/:userId', getUserOffers);

export default router;
