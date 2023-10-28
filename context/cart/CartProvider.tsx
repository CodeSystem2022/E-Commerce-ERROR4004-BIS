import { FC, useReducer, ReactNode, useEffect } from 'react'
import Cookie from 'js-cookie'

import { ICartProduct } from '@/interfaces/cart'
import { CartContext, cartReducer } from './'

export interface CartState {
    isLoaded: boolean
    cart: ICartProduct[]
    numberOfItems: number
    subTotal: number
    tax: number
    total: number
}

const CART_INITIAL_STATE: CartState = {
    isLoaded: false,
    cart: [],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
}

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider: FC<CartProviderProps> = ({
    children
}) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

    useEffect(() => {
        try {
            const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : []
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts })
        } catch (error) {
            // If someone try to manipulate the cookie
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] })
        }
    }, [])

    useEffect(() => {
        Cookie.set('cart', JSON.stringify(state.cart))
    }, [state.cart])

    useEffect(() => {
        // To update summary
        const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0)
        const subTotal = state.cart.reduce((prev, current) => current.quantity * current.price + prev, 0)
        const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0)

        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal * (taxRate + 1)
        }

        dispatch({ type: '[Cart] - Update order summary', payload: orderSummary })
    }, [state.cart])

    const addProductToCart = (product: ICartProduct) => {
        // Validate if the product already exist in the shopping cart
        const productInCart = state.cart.some(p => p._id === product._id)
        // If the product by id dosn't exist in the shopping cart -> it's added
        if (!productInCart) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

        // validate if the product already exist in the shopping cart and has the same size
        const productInCartButDifferentSize = state.cart.some(p => p._id === product._id && p.size === product.size)
        // If exist and has different size -> it's added
        if (!productInCartButDifferentSize) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })

        // The product exist and has the same size -> need to sum
        const updateProducts = state.cart.map(p => {
            if (p._id !== product._id) return p
            // Product exist and has different size
            if (p.size !== product.size) return p

            // Product exist and has same size -> Update quantity
            p.quantity += product.quantity

            return p
        })

        dispatch({ type: '[Cart] - Update products in cart', payload: updateProducts })
    }

    const removeCartProduct = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Remove product in cart', payload: product })
    }

    const updateCartQuantity = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Change cart quantity', payload: product })
    }

    return (
        <CartContext.Provider value={ {
            ...state,
            // Methods
            addProductToCart,
            removeCartProduct,
            updateCartQuantity,
        } }>
            { children }
        </CartContext.Provider>
    )
}
