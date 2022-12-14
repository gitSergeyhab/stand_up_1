import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { router } from './routers';
import { sequelize } from './sequelize';

import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { errorMiddleware } from './middlewares/error-middleware';

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());


app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.use(errorMiddleware);

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