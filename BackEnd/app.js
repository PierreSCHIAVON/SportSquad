const express = require('express');
const cors = require('cors');
require('./models').sequelize_object;

const corsOptions = {
    origin: 'http://localhost:5173', // URL du front
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

const app = express();
const userRoutes = require('./routes');

app.use('/', userRoutes);
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});