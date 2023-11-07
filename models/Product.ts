import mongoose, { Schema, model, Model } from 'mongoose'
import { IProduct } from '../interfaces'

const productSchema = new Schema({
  description: { type: String, required: true, default: '' },
  images: [{ type: String }],
  inStock: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
  sizes: [{
    type: String,
    enum: {
      values: ['30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'],
      message: '{VALUE} in not a valid size'
    }
  }],
  slug: { type: String, required: true, unique: true },
  tags: [{ type: String }],
  title: { type: String, required: true, default: '' },
  type: [{
    type: String,
    enum: {
      values: ['running', 'sneakers', 'soccer', 'basketball', 'driving', 'training'],
      message: '{VALUE} in not a valid type'
    },
    default: 'sneakers'
  }],
  gender: [{
    type: String,
    enum: {
      values: ['men', 'women', 'kid', 'unisex'],
      message: '{VALUE} in not a valid gender'
    },
    default: 'unisex'
  }],
}, {
  timestamps: true
})

productSchema.index({ title: 'text', tags: 'text' })

const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema)

export default Product