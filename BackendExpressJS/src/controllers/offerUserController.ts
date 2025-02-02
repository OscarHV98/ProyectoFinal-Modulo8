import { Request, Response } from 'express';
import OfferUser from '../models/OfferUser';
import Offer from '../models/Offer';
import User from '../models/User';

export const addOfferToUser = async (req: Request, res: Response) => {
  try {
    const { userId, offerId } = req.body;
    const offerUser = await OfferUser.create({ userId, offerId });
    res.status(201).json(offerUser);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserOffers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const offers = await Offer.findAll({
      order: [['id', 'ASC']],
      include: {
        model: User,
        where: { id: userId },
        through: { attributes: [] }, // Ocultar atributos de la tabla intermedia
      },
    });
    res.json(offers);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
};
