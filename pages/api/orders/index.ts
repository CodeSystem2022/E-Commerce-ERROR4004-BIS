import type { NextApiRequest, NextApiResponse } from 'next'
import { IOrder } from '../../../interfaces'
import { getSession } from 'next-auth/react'
import { db } from '../../../database'
import { Product, Order } from '../../../models'
import mongoose from 'mongoose'

type Data =
    | { message: string }
    | IOrder

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
    // create an array of products id in the shopping cart
    const productsIds = orderItems.map(product => product._id)

    await db.connect()
    // Create an array with the products
    const dbProducts = await Product.find({ _id: { $in: productsIds } })

    try {

        const subTotal = orderItems.reduce((prev, current) => {
            
            const currentProduct = dbProducts.find(prod => prod._id.toString() === current._id)
            const currentPrice = currentProduct!.price

            if (!currentPrice) {
                throw new Error('Check the shopping card, the product is not there')
            }

            return (currentPrice * current.quantity) + prev
        }, 0)

        const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0)
        const backendTotal = subTotal * (taxRate + 1)

        if (total !== backendTotal) {
            throw new Error("The total to paid it's wrong")
        }

        // Everything it's fine
        const userId = session.user._id
        const newOrder = new Order({ ...req.body, isPaid: false, user: userId })

        //redondear a 2 decimales
        newOrder.total = Math.round(newOrder.total * 100) / 100

        await newOrder.save()
        await db.disconnect()

        return res.status(201).json(newOrder)

    } catch (error: any) {
        await db.disconnect()
        console.log(error)
        res.status(400).json({ message: error.message || 'Check server logs' })
    }
}
