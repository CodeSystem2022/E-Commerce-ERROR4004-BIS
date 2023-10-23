// type ISizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
export type ISize = '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41' | '42' | '43' | '44' | '45' | '46' | '47' | '48' | '49' | '50'

export type IType = 'running' | 'sneakers' | 'soccer' | 'basketball' | 'driving' | 'training'

export interface IProduct {
  _id: string
  description: string
  images: string[]
  inStock: number
  price: number
  sizes: ISize[]
  slug: string
  tags: string[]
  title: string
  type: IType
  gender: 'men' | 'women' | 'kid' | 'unisex'
  createdAt: string
  updatedAt: string
}

