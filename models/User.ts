import moongose, {Schema, model, Model} from 'mongoose'
import { IUser } from '@/interfaces/user'

const userSchema = new Schema({

    name    : {type: String, required: true },
    email   : {type: String, required: true, unique: true },
    password: {type: String, required: true },
    role: {
        type: String,
        enum: {
            values: ['admin', 'client'],
            message: '{VALUE} no es un role válido',
            default: 'client',
            required: true
        }        
    }
}, {
    timestamps: true,
})

const User:Model<IUser> = moongose.models.User || model('User', userSchema);

export default User;