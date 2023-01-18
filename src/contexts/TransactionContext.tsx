import { createContext, ReactNode, useEffect, useState } from 'react'

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
    const url = new URL('http://localhost:3333/transaction')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
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
