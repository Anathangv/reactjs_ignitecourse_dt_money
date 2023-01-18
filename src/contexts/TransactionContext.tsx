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

interface ICreateTransactionInput {
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
}

interface ITransactionContextType {
  transactions: ITransaction[]
  createTransaction: (transaction: ICreateTransactionInput) => Promise<void>
  fetchTransactions: (query: string) => Promise<void>
}

export const TransactionContext = createContext({} as ITransactionContextType)

export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function createTransaction(data: ICreateTransactionInput) {
    const { category, description, type, value } = data

    const response = await api.post('transactions', {
      description,
      category,
      type,
      value,
      createdAt: new Date(),
    })

    console.log(response)

    setTransactions((transactions) => [response.data, ...transactions])
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        createTransaction,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
