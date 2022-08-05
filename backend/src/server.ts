import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'


const app = express();
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/PIA_Avgust");

const conn = mongoose.connection;

conn.once('open',()=>{
    console.log('Uspesna konekcija');
});

const router = express.Router();

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));