import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { router } from './routers';
import { sequelize } from './sequelize';

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
// app.use(express.json());

app.use('/api', router);

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