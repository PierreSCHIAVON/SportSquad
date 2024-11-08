const cors = require('cors');
const express = require('express');

const corsOptions = {
    origin: 'http://localhost:5173', // URL du front
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

const configureMiddleware = (app) => {
    // Configurer CORS avec les options définies
    app.use(cors(corsOptions));

    // Middleware to parse JSON requests
    app.use(express.json());

    // Configurer CORS pour autoriser toutes les origines
    app.use(cors());
};


module.exports = configureMiddleware;