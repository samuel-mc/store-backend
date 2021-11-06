const express = require('express');
const app = express();
const sequelize = require('./db/db.connection');
const cors = require('cors');
require('dotenv').config();


// Middlewares globales
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(cors());

app.listen(process.env.PORT, async () =>{
    try {
        await sequelize.authenticate();
        console.log(`Runing on port: ${process.env.PORT}`);
    } catch (error) {
        console.log(`Error on runing: ${error}`);
    }
})

app.use('/api/v1/', require('./routes/index.routes'));