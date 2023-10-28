import jwt from 'jsonwebtoken'

export const signToken = (_id: string, email: string) => {

    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('No seed of JWT - check environment variables')
    }

    return jwt.sign(
        // payload
        { _id, email },
        // secretOrPrivateKey (seed)
        process.env.JWT_SECRET_SEED,
        // options (validate until)
        { expiresIn: '30d' }
    )
}

export const isValidToken = (token: string): Promise<string> => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error('No seed of JWT - check environment variables')
    }

    if (token.length <= 10 ) { 
       return  Promise.reject('JWT is not valid')
    }

    return new Promise((resolve, reject) => {

        try {
            jwt.verify(token, process.env.JWT_SECRET_SEED || '', (err, payload) => {
                if (err) return reject('Not valid JWT')

                const { _id } = payload as { _id: string }

                resolve(_id)
            })
        } catch (error) {
            reject('Not valid JWT')
        }
    })
}
