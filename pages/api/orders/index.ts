import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch( req.method) {
        case 'POST':
            return createOrder( req, res)
        
        default:
            return res.status(400).json({ message: 'Bad Request' })
    }        
}

const createOrder = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    const body = req.body
    return res.status(201).json( body )
}
