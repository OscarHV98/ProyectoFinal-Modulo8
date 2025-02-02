import { Request, Response } from 'express';
import Profession from '../models/Profession';

export const createProfession = async (req: Request, res: Response) => {
  try {
    const profession = await Profession.create(req.body);
    res.status(201).json(profession);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllProfessions = async (_req: Request, res: Response) => {
  try {
    const professions = await Profession.findAll({order: [['id', 'ASC']]});
    res.json(professions);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};


export const updateProfession = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const [updated] = await Profession.update(req.body, { where: { id } });
      if (updated) {
          const updatedProfession = await Profession.findByPk(id);
          res.json(updatedProfession);
      } else {
          res.status(404).json({ message: 'Profesión no encontrado' });
      }
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};

export const deleteProfession = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const deleted = await Profession.destroy({ where: { id } });
      if (deleted) {
          res.status(204).send();
      } else {
          res.status(404).json({ message: 'Profesión no encontrado' });
      }
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};
