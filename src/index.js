import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes';

const app = express();
const corsOptions = {
    credentials: true,
    origin: [],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
    })
);
app.use(bodyParser.json());

app.use(router);

app.use((req, res, next) =>{
    return res.status(404).json({
        message:'Resource not found',
        status: false
    })
})

// configure port and listen for requests
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


export default app;
