import { FC, useEffect, useReducer, ReactNode } from 'react'

import { AuthContext, authReducer } from './'

import Cookies from 'js-cookie'

import { IUser } from '../../interfaces'
import { ohlalaApi } from '../../api'

import axios from 'axios'
export interface AuthState {
  isLoggedIn: boolean
  user?: IUser
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined
}

interface AuthProviderProps {
  children: ReactNode
}
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = async () => {
    try {
      const { data } = await ohlalaApi.get('/user/validate-token')
      const { token, user } = data
      Cookies.set('token', token)
      dispatch({ type: '[Auth] - Login', payload: user })

    } catch (error) {
      Cookies.remove('token')
    }
  }

  const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await ohlalaApi.post('/user/login', { email, password })
      const { token, user } = data
      Cookies.set('token', token)
      dispatch({ type: '[Auth] - Login', payload: user })
      return true

    } catch (error) {
      return false
    }
  }

  const registerUser = async (name: string, email: string, password: string): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await ohlalaApi.post('/user/register', { name, email, password })
      const { token, user } = data
      Cookies.set('token', token)
      dispatch({ type: '[Auth] - Login', payload: user })

      return {
        hasError: false
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
        message: 'The user was not created - try again'
      }
    }
  }

  return (
    <AuthContext.Provider
      value={ {
        ...state,
        loginUser,
        registerUser
      } }
    >
      { children }
    </AuthContext.Provider>
  )
}