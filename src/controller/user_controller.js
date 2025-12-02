import user_model from '../model/user_model.js'

export const create_user = async (req, res) => {
    try {
        const data = req.body

        const { name, email, password } = data

        const nameRe = /^[A-Za-z ]{2,50}$/;
        const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
        const passRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?& ]{8,}$/;


        if (!name) return res.status(400).send({ status: false, msg: "name is required" })
        if (!nameRe.test(name)) return res.status(400).send({ status: false, msg: "Invalid name" })

        if (!email) return res.status(400).send({ status: false, msg: "email is required" })
        if (!emailRe.test(email.trim())) return res.status(400).send({ status: false, msg: "Invalid email" })

        if (!password) return res.status(400).send({ status: false, msg: "password is required" })
        if (!passRe.test(password)) return res.status(400).send({ status: false, msg: "Invalid Password" })

        const DB = await user_model.create(data)
        return res.status(201).send({ status: true, msg: "SucessFull Create User", DB })
    }
    catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
} 