import { Router } from 'express';
import { createLocation, deleteLocation, getAllLocations, updateLocation } from '../controllers/locationController';

const router = Router();
router.post('/', createLocation);
router.get('/', getAllLocations);
router.put('/:id', updateLocation);
router.delete('/:id', deleteLocation);
export default router;
