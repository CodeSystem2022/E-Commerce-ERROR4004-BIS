import type { NextApiRequest, NextApiResponse } from 'next'
import { IOrder } from '../../../interfaces'
import { getSession } from 'next-auth/react'
import { db } from '../../../database'
import { Product } from '../../../models'

type Data = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'POST':
            return createOrder(req, res)

        default:
            return res.status(400).json({ message: 'Bad Request' })
    }
}

const createOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { orderItems, total } = req.body as IOrder

    // Check there is a user
    const session: any = await getSession({ req })
    if (!session) { 
        return res.status(401).json({ message: 'Need to be authenticated' })
    }

    // Check price of products with data base
    const productsIds = orderItems.map(product => product._id)
    await db.connect()
    
    const dbProducts = await Product.find({ _id: { $in: productsIds } })
    
    console.log('dbProducts ', dbProducts)

    return res.status(201).json(req.body)
}
