import user_model from '../model/user_model.js'
import bcrypt from 'bcrypt'

export const create_user = async (req, res) => {
    try {
        const data = req.body

        const { email } = data

        const checkUser = await user_model.findOne({ email: email })

        if (checkUser) return res.status(200).send({ status: true, msg: "user Already Create pls LogIn" })

        const DB = await user_model.create(data)

        return res.status(201).send({ status: true, msg: "SucessFull Create User", DB })
    }
    catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}  