
const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const routes = express.Router();
const upload = multer(uploadConfig); //docs multer

const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

routes.post('/sessions', SessionController.store); //

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store); // id do spot, criar reserva dentro de um respectivo spot

module.exports = routes;
  