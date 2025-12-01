export const create_user = (req, res) => {
    try {
        const data = req.body

        const { name, email, password } = data

        const nameRe = /^[A-Za-z ]{2,50}$/;
        const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
        const passRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


        if(!name) return res.status(400).send({ status: false, msg: "name is required" })
        if(name.trim().length == 0  || !nameRe.test(name.trim())) return res.status(400).send({ status: false, msg: "Invalid name" })
`
        if (!email) return res.status(400).send({ status: false, msg: "email is required" })
        if (email.trim().length == 0  || !emailRe.test(email.trim())) return res.status(400).send({ status: false, msg: "Invalid email" })

        if (!password) return res.status(400).send({ status: false, msg: "password is required" })`
        if (password.trim().length == 0  || !passRe.test(password.trim())) return res.status(400).send({ status: false, msg: "Invalid Password" })

        console.log(data)
        return res.send({ status: true, msg: "ok" })
    }
    catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
} 