
import { user_model } from '../model/user_model.js'
export const create_user = async (req, res) => {
    try {
        const data = req.body

        const { name, email, password } = data
        if (!name) { return res.status(400).send({ status: false, message: "Please provide Name!" }) }
        if (!email) { return res.status(400).send({ status: false, message: "Please provide email!" }) }
        if (!password) { return res.status(400).send({ status: false, message: "Please provide Password!" }) }

        const DB = await user_model.create(data)

        return res.status(200).send({ status: true, data: DB })
    }
    catch (err) { return res.status(500).send({ status: false, message: err.message }) }
}

export const get_all_user = async (req, res) => {
    try {

        const DB = await user_model.findOne()

        res.status(200).send({ status: true, data: DB })
    }
    catch (err) { return res.status(500).send({ status: false, message: err.message }) }
}

