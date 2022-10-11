import dotenv from 'dotenv';
import express from 'express';
import { router } from './routers';
import { sequelize } from './sequelize';
dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

app.use('/api', router)

const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => console.log(`SERVER started on PORT :  ${port}`));
    } catch (err) {
        console.log(' -- Start Server Error: ')
        console.log(err)

    }
}

start();