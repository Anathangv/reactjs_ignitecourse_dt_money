import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TransactionContextProps {
  children: ReactNode
}

export interface ITransaction {
  id: number
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
  createdAt: string
}

interface ITransactionContextType {
  transactions: ITransaction[]
  addNewTransaction: (transaction: ITransaction) => void
  fetchTransactions: (query: string) => Promise<void>
}

export const TransactionContext = createContext({} as ITransactionContextType)

export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transaction', {
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  useEffect(() => {
    setTransactions(transactions)
  }, [transactions])

  function addNewTransaction(transaction: ITransaction) {
    console.log('addNewTransaction', transaction)

    setTransactions((transations) => [
      ...transations,
      { ...transaction, id: transations.length + 1 },
    ])
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addNewTransaction,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
