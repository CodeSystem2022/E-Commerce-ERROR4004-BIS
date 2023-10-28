import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { User } from '../../../models'
import bcrypt from 'bcryptjs';
import { jwt, validations } from '../../../utils'

type Data =
    | { message: string }
    | {
        token: string
        user: {
            email: string
            name: string
            role: string
        }
    }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'POST':
            return registerUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { email = '', password = '', name = '' } = req.body as { email: string, password: string, name: string }

    if (password.length < 6) {
        return res.status(400).json({
            message: 'Password must have at least 6 characters'
        })
    }

    if (name.length < 2) {
        return res.status(400).json({
            message: 'The name must have at least 2 characters'
        })
    }

    if (!validations.isValidEmail(email)) {
        return res.status(400).json({
            message: 'Not a valid email'
        })
    }

    await db.connect()
    const user = await User.findOne({ email })

    // If an active user already use the email
    if (user) {
        return res.status(400).json({
            message: 'Email already register'
        })
    }

    const newUser = new User({
        email: email.toLocaleLowerCase(),
        password: bcrypt.hashSync(password),
        role: 'client',
        name,
    })

    try {
        await newUser.save({ validateBeforeSave: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Check server error'
        })
    }

    const { _id, role } = newUser

    const token = jwt.signToken(_id, email)

    return res.status(200).json(
        {
            token, //jwt
            user: {
                email,
                role,
                name
            }
        })
}

