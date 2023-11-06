import type { NextApiRequest, NextApiResponse } from 'next'

import { isValidObjectId } from 'mongoose'

import { IProduct } from '../../../interfaces'
import { db } from '../../../database'
import { Product } from '../../../models'

type Data =
  | { message: string }
  | IProduct[]
  | IProduct

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch (req.method) {
    case 'GET':
      return getProducts(req, res)

    case 'PUT':
      return updateProduct(req, res)

    case 'POST':
      return createProduct(req, res)

    default:
      return res.status(400).json({ message: 'Bad request' })
  }

}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {


  await db.connect()

  const products = await Product.find().sort({ title: 'asc' }).lean()

  await db.disconnect()

  // TODO: updated images

  res.status(200).json(products)
}

const updateProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { _id = '', images } = req.body as IProduct

  if (!isValidObjectId(_id)) {
    return res.status(400).json({ message: 'Not valid ID product' })
  }

  if (images.length < 2) {
    return res.status(400).json({ message: '2 images at least' })
  }

  // TODO: localhost:3000/products/xxx.jpg

  try {
    await db.connect()
    // First check that the product already exist on data base
    const product = await Product.findById(_id)
    if (!product) {
      await db.disconnect()
      return res.status(400).json({ message: 'No product with that ID' })
    }

    // TODO: delete images en Cloudinary

    await product.update(req.body)
    await db.disconnect()

    return res.status(200).json(product)

  } catch (error) {
    await db.disconnect()
    return res.status(400).json({ message: 'Error when updating the product' })
  }

}

const createProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const { images = [] } = req.body as IProduct

  if (images.length < 2) {
    return res.status(400).json({ message: 'The product needs at least 2 images' })
  }

  // TODO: localhost:3000/products/xxx.jpg

  try {
    await db.connect()
    // Check if the slug already exist on data base
    const productInDB = await Product.findOne({ slug: req.body.slug })
    if (productInDB) { 
      await db.disconnect()
      return res.status(400).json({ message: 'One product with that slug already exists' })
    } 

    const product = new Product(req.body)
    await product.save()

    await db.disconnect()
    return res.status(200).json(product)
    
  } catch (error) {
    await db.disconnect()
    return res.status(400).json({ message: 'The product could not be created' })
  }

}

