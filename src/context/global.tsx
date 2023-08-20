import { createContext, useState } from 'react'
import { type UserType } from '../models/UserType'

interface GlobalContextType {
  user: UserType | null
  setUser: (user: UserType | null) => void
  plate: string | null
  setPlate: (plate: string | null) => void
}

const defaultContext: GlobalContextType = {
  user: null,
  setUser: (user: UserType | null) => {
    console.log('user', user)
  },
  plate: null,
  setPlate: (plate: string | null) => {
    console.log('plate', plate)
  }
}

export const GlobalContext = createContext<GlobalContextType>(defaultContext)

export function GlobalProvider ({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null)
  const [plate, setPlate] = useState<string | null>(null)

  return (
    <GlobalContext.Provider value={{ user, setUser, plate, setPlate }}>
      {children}
    </GlobalContext.Provider>
  )
}
