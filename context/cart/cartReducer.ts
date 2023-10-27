import { CartState } from './'
import { ICartProduct } from '../../interfaces'

type CartActionType =
   | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
   | { type: '[Cart] - Update products in cart', payload: ICartProduct[] }
   | { type: '[Cart] - Change cart quantity', payload: ICartProduct }

export const cartReducer = (state: CartState, action: CartActionType): CartState => {

   switch (action.type) {
      case '[Cart] - LoadCart from cookies | storage':
         return {
            ...state,
            cart: [...action.payload]
         }

      case '[Cart] - Update products in cart':
         return {
            ...state,
            cart: [...action.payload]
         }
      
      case '[Cart] - Change cart quantity':
         return {
            ...state,
            cart: state.cart.map(product => { 
               if (product._id !== action.payload._id) return product
               if (product.size !== action.payload.size) return product
               
               return action.payload
            })
         }

      default:
         return state
   }

}
