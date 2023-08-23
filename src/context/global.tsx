import { createContext, useState } from 'react'
import { type UserType } from '../models/UserType'

interface GlobalContextType {
  user: UserType | null
  setUser: (user: UserType | null) => void
  plate: string | null
  setPlate: (plate: string | null) => void
  amount: number
  setAmount: (amount: number) => void
  baseAmount: number
  insuredAmount: number
  setInsuredAmount: (amount: number) => void
}

const defaultContext: GlobalContextType = {
  user: null,
  setUser: (user: UserType | null) => {
    console.log('user', user)
  },
  plate: null,
  setPlate: (plate: string | null) => {
    console.log('plate', plate)
  },
  amount: 0,
  setAmount: (amount: number) => {
    console.log('amount', amount)
  },
  baseAmount: 0,
  insuredAmount: 0,
  setInsuredAmount: (amount: number) => {
    console.log('insuredAmount', amount)
  }
}

export const GlobalContext = createContext<GlobalContextType>(defaultContext)

export function GlobalProvider ({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null)
  const [plate, setPlate] = useState<string | null>(null)
  const baseAmount = 20
  const [amount, setAmount] = useState<number>(baseAmount)
  const [insuredAmount, setInsuredAmount] = useState<number>(0)

  return (
    <GlobalContext.Provider
    value={{
      user,
      setUser,
      plate,
      setPlate,
      amount,
      setAmount,
      baseAmount,
      insuredAmount,
      setInsuredAmount
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
