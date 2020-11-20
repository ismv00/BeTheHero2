const express = require('express');
const routes = express.Router();

const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

module.exports = routes;