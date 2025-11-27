import express from 'express'
import { create_user, get_all_user } from '../controller/user_cotroller.js'

const routes = express.Router()

// crud create read update delete
// create => post
// read => get
// update => put
// delete => delete

routes.post('/api/create_user', create_user)
routes.get('/api/get_all_user', get_all_user)

export default routes