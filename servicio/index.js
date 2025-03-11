const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const routes = [
    require('./src/modules/category/category.router')
];

const api = express();

api.set('port', process.env.API_PORT);

api.use(morgan('dev'));
api.use(express.urlencoded({extended: false}));
api.use(express.json());
api.use((request, response, next) => {
    response.header('Access-Control-Allow-Origins', '*');
    response.header('Access-Control-Allow-Headers', 'Accept, Content-Type, Authorization');
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

api.use(`${process.env.API_BASE}/category`, routes[0]);

api.listen(api.get('port'), () => {
    console.log(`API corriendo en el puerto ${api.get('port')}`);
});