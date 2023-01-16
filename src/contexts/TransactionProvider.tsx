import { createContext, ReactNode, useState } from 'react'

interface TransactionContextProps {
  children: ReactNode
}

export type TransactionType = 'Income' | 'Expense'

export interface ITransaction {
  description: string
  value: number
  category: string
  type: TransactionType
}

interface ITransactionContext {
  transactions: ITransaction[]
  addNewTransaction: (transction: ITransaction) => void
}

export const TransactionContext = createContext({} as ITransactionContext)

export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  function addNewTransaction(transction: ITransaction) {
    console.log('addNewTransaction', transction)

    setTransactions((transations) => [...transations, transction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, addNewTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
