// src/controllers/offerController.ts

import { Request, Response } from 'express';
import Offer from '../models/Offer';
import WebSocket from 'ws';
import { Location, Profession, User } from '../models';

let wss: WebSocket.Server;

export const setWebSocketServer = (wsServer: WebSocket.Server) => {
  wss = wsServer;
};

export const createOffer = async (req: Request, res: Response) => {
  try {
    const offer = await Offer.create(req.body);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(offer));
      }
    });
    res.status(201).json(offer);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllOffers = async (_req: Request, res: Response) => {
  try {
    const offers = await Offer.findAll({
      include: [
        {
          model: User,
          attributes: ['username', 'name', 'email'], // Campos específicos del usuario
        },
        {
          model: Profession,
          attributes: ['name'], // Nombre de la profesión
        },
        {
          model: Location,
          attributes: ['name'], // Nombre de la ubicación
        },
      ],
    });

    res.json(offers);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};


export const updateOffer = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const [updated] = await Offer.update(req.body, { where: { id } });
      if (updated) {
          const updatedOffer = await Offer.findByPk(id);
          res.json(updatedOffer);
      } else {
          res.status(404).json({ message: 'Profesión no encontrado' });
      }
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};

export const deleteOffer = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const deleted = await Offer.destroy({ where: { id } });
      if (deleted) {
          res.status(204).send();
      } else {
          res.status(404).json({ message: 'Profesión no encontrado' });
      }
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
};
