import { createContext } from 'react'

interface ContextProps {
  isMenuOpen: boolean
  // methods
  toggleSideMenu: () => void
 }

export const UiContext = createContext({} as ContextProps)