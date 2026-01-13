import express from 'express';
import { create_user,user_verify_otp } from '../controller/user_controller.js'
const routes = express.Router()



routes.post('/create_user', create_user)
routes.post('/user_verify_otp/:id', user_verify_otp)

export default routes