//redirect request to particular methon on Controller
import express from 'express';
import {registerUser} from '../controllers/user';
const router = express.Router();

//POST /user/
router.post('/',registerUser)

export default router;