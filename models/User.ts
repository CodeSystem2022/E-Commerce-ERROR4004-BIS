import moongose, { Schema, model, Model } from 'mongoose'
import { IUser } from '../interfaces'

// Schema definition
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: {
            values: ['admin', 'client', 'super-user', 'SEO'],
            message: '{VALUE}, not a valid role',
            default: 'client',
            required: true
        }
    }
}, {
    timestamps: true,
})

// Mongoose
const User: Model<IUser> = moongose.models.User || model('User', userSchema)

export default User