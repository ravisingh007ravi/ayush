import mongoose from 'mongoose'
import { validName, validwmail, validpassword } from '../validation/allvalidation.js'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: {
        type: String, trim: true, required: [true, 'Name is Required'], validate: [validName, 'Invalid Name']
    },
    email: {
        type: String, trim: true, unique: true, required: [true, 'Email is Required'],
        validate: [validwmail, 'Invalid Email']
    },
    password: {
        type: String, trim: true, required: [true, 'Password is Required'],
        validate: [validpassword, 'Invalid Password give one UpperCase, one LowerCase, one Number and one Special Character']
    },
})

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
})

export default mongoose.model('usedsrs', userSchema)