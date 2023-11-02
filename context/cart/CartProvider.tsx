import React, { FC, useReducer, ReactNode, useEffect } from 'react'
import Cookie from 'js-cookie'
import { ICartProduct, IOrder, ShippingAddress } from '../../interfaces'
import { CartContext, cartReducer } from './'
import { ohlalaApi } from '../../api'
import axios from 'axios'

export interface CartState {
    isLoaded: boolean
    cart: ICartProduct[]
    numberOfItems: number
    subTotal: number
    tax: number
    total: number
    shippingAddress?: ShippingAddress
}

const CART_INITIAL_STATE: CartState = {
    isLoaded: false,
    cart: [],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
    shippingAddress: undefined
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

        if (Cookie.get('firstName')) {
            const shippingAddress = {
                firstName: Cookie.get('firstName') || '',
                lastName: Cookie.get('lastName') || '',
                address: Cookie.get('address') || '',
                address2: Cookie.get('address2') || '',
                zip: Cookie.get('zip') || '',
                city: Cookie.get('city') || '',
                country: Cookie.get('country') || '',
                phone: Cookie.get('phone') || '',
            }

            dispatch({ type: '[Cart] - LoadAddres from Cookies', payload: shippingAddress })
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

    const updateAddress = (address: ShippingAddress) => {
        Cookie.set('firstName', address.firstName)
        Cookie.set('lastName', address.lastName)
        Cookie.set('address', address.address)
        Cookie.set('address2', address.address2 || '')
        Cookie.set('zip', address.zip)
        Cookie.set('city', address.city)
        Cookie.set('country', address.country)
        Cookie.set('phone', address.phone)

        dispatch({ type: '[Cart] - Update Address', payload: address })
    }

    const createOrder = async (): Promise<{ hasError: boolean; message: string; }> => {

        if (!state.shippingAddress) {
            throw new Error('There is no delivery address')
        }

        const body: IOrder = {
            orderItems: state.cart.map(p => ({
                ...p,
                size: p.size!
            })),
            shippingAddress: state.shippingAddress,
            numberOfItems: state.numberOfItems,
            subTotal: state.subTotal,
            tax: state.tax,
            total: state.total,
            isPaid: false
        }

        try {
            const { data } = await ohlalaApi.post<IOrder>('/orders', body)

            dispatch({type: '[Cart] - Order complete'})

            return {
                hasError: false,
                message: data._id!
            }

        } catch (error) {
            if (axios.isAxiosError(error)) { 
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }

            return {
                hasError: true,
                message: 'Error, talk with the administrator'
            }
        }
    }


    return (
        <CartContext.Provider value={ {
            ...state,
            // Methods
            addProductToCart,
            removeCartProduct,
            updateCartQuantity,
            updateAddress,
            //Orders
            createOrder,
        } }>
            { children }
        </CartContext.Provider>
    )
}
