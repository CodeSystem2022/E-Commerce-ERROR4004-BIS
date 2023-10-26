import { FC, useReducer, ReactNode } from 'react'

import { ICartProduct } from '@/interfaces/cart'
import { CartContext, cartReducer } from './'

export interface CartState {
    cart: ICartProduct[]
}

const CART_INITIAL_STATE: CartState = {
    cart: []
}

interface CartProviderProps {
    children: ReactNode
}
export const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

    const addProductToCart = (product: ICartProduct) => {

        const productInCart = state.cart.some(p => p._id === product._id)
        if (!productInCart) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

        // validate size
        const productInCartButDifferentSize = state.cart.some(p => p._id === product._id && p.size === product.size)
        if (!productInCartButDifferentSize) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

        const updateProducts = state.cart.map(p => { 
            if (p._id !== product._id) return p
            // Product exist and has different size
            if (p.size !== product.size) return p

            // Update quantity
            p.quantity += product.quantity

            return p
        })

        dispatch({ type: '[Cart] - Update products in cart', payload: updateProducts })
    }

    return (
        <CartContext.Provider value={ {
            ...state,
            // Methods
            addProductToCart,
        } }>
            { children }
        </CartContext.Provider>
    )
}
