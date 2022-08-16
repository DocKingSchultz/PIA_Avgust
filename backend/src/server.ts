import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { userController } from './controllers/userController';


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

router.route('/login').post(
    (req, res)=>new userController().login(req, res)
)

router.route('/checkAdminKey').post(
    (req, res)=>new userController().checkAdminKey(req, res)
)

router.route('/adminLogin').post(
    (req, res)=>new userController().adminLogin(req, res)
)

router.route('/createNewToken').post(
    (req, res)=>new userController().createNewToken(req, res)
)

router.route('/changePassword').post(
    (req, res)=>new userController().changePassword(req, res)
)
router.route('/makeRegistrationRequest').post(
    (req, res)=>new userController().makeRegistrationRequest(req, res)
)
router.route('/getAllRegistrationRequests').post(
    (req, res)=>new userController().getAllRegistrationRequests(req, res)
)

router.route('/changeAccStatus').post(
    (req, res)=>new userController().changeAccStatus(req, res)
);
