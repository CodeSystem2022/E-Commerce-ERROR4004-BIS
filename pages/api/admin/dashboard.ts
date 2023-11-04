import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  numberOfOrders: number
  paidOrders: number // isPaid: true
  notPaidOrders: number
  numberOfClients: number // role: client
  numberOfProducts: number
  productsWithNoInventory: number // 0
  lowInventory: number // 10 or less products in stock
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

  res.status(200).json()

}