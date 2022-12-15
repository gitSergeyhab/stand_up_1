import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { router } from './routers';
import { sequelize } from './sequelize';

import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

// app.use(cors());

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET_KEY || 'test',
    resave: false,
    saveUninitialized: false,
    name: 'user',
    cookie: {
        maxAge: 1000 * 60 * 60 / 10, //*24
    }
}))


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