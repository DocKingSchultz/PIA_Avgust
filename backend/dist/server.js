"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const userController_1 = require("./controllers/userController");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect("mongodb://localhost:27017/PIA_Avgust");
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('Uspesna konekcija');
});
const router = express_1.default.Router();
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
router.route('/login').post((req, res) => new userController_1.userController().login(req, res));
router.route('/checkAdminKey').post((req, res) => new userController_1.userController().checkAdminKey(req, res));
router.route('/adminLogin').post((req, res) => new userController_1.userController().adminLogin(req, res));
router.route('/createNewToken').post((req, res) => new userController_1.userController().createNewToken(req, res));
router.route('/changePassword').post((req, res) => new userController_1.userController().changePassword(req, res));
router.route('/makeRegistrationRequest').post((req, res) => new userController_1.userController().makeRegistrationRequest(req, res));
router.route('/getAllRegistrationRequests').post((req, res) => new userController_1.userController().getAllRegistrationRequests(req, res));
router.route('/changeAccStatus').post((req, res) => new userController_1.userController().changeAccStatus(req, res));
//# sourceMappingURL=server.js.map