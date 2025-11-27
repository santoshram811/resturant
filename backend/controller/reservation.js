import ErrorHandler from '../error/error.js';
import { Reservation } from '../models/reservationSchema.js';

export const sendReservation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone } = req.body;

    if (!firstName || !lastName || !email || !phone) {
      return next(new ErrorHandler('Please fill the full reservation form', 400));
    }

    await Reservation.create({ firstName, lastName, email, phone });

    res.status(200).json({
      success: true,
      message: 'Reservation sent successfully'
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const validationErrors = Object.values(err.errors).map((e) => e.message);
      return next(new ErrorHandler(validationErrors.join(','), 400));
    }
    next(err);
  }
};
