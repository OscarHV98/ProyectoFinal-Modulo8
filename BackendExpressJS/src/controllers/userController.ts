import { Request, Response } from 'express';
import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {

      const users = await User.findAll({
          order: [['id', 'ASC']]
      });
      res.json(users);
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};


export const updateUser = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const [updated] = await User.update(req.body, { where: { id } });
      if (updated) {
          const updatedUser = await User.findByPk(id);
          res.json(updatedUser);
      } else {
          res.status(404).json({ message: 'Usuario no encontrado' });
      }
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const deleted = await User.destroy({ where: { id } });
      if (deleted) {
          res.status(204).send();
      } else {
          res.status(404).json({ message: 'Usuario no encontrado' });
      }
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};
