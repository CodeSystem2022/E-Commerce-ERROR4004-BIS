import { FC, useReducer, ReactNode } from 'react'

import { AuthContext, authReducer } from './'

import Cookies from 'js-cookie'

import { IUser } from '../../interfaces'
import { ohlalaApi } from '../../api'

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

  return (
    <AuthContext.Provider value={ {
      ...state,
      loginUser
    } }>
      { children }
    </AuthContext.Provider>
  )
}