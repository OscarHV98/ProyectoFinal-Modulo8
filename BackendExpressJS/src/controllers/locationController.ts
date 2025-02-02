import { Request, Response } from 'express';
import Location from '../models/Location';

export const createLocation = async (req: Request, res: Response) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).json(location);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllLocations = async (_req: Request, res: Response) => {
  try {
    const locations = await Location.findAll({order: [['id', 'ASC']]});
    res.json(locations);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLocation = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const [updated] = await Location.update(req.body, { where: { id } });
      if (updated) {
          const updatedLocation = await Location.findByPk(id);
          res.json(updatedLocation);
      } else {
          res.status(404).json({ message: 'Ubicación no encontrado' });
      }
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};

export const deleteLocation = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const deleted = await Location.destroy({ where: { id } });
      if (deleted) {
          res.status(204).send();
      } else {
          res.status(404).json({ message: 'Ubicación no encontrado' });
      }
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};
