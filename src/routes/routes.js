import express from 'express'
import { create_user, get_all_user } from '../controller/user_cotroller.js'
const routes = express.Router()


// User API's
routes.post('/create_user', create_user)
routes.get('/get_all_user', get_all_user)


export default routes