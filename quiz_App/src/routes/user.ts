//redirect request to particular methon on Controller
import express from 'express';
import {getUser, registerUser, updateUser} from '../controllers/user';
const router = express.Router();

//POST /user/
router.post('/',registerUser);

//Get /user/:userId
router.get('/:userId',getUser);

//PUT /user/
router.put('/',updateUser);

export default router;