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
  filteredTransactions: ITransaction[]
  totalIncome: number
  totalOutcome: number
  addNewTransaction: (transaction: ITransaction) => void
  searchTransaction: (search: string) => void
}

export const TransactionContext = createContext({} as ITransactionContextType)

export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  const [filteredTransactions, setFilteredTransactions] =
    useState<ITransaction[]>(transactions)

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transaction')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  useEffect(() => {
    setFilteredTransactions(transactions)
  }, [transactions])

  function addNewTransaction(transaction: ITransaction) {
    console.log('addNewTransaction', transaction)

    setTransactions((transations) => [
      ...transations,
      { ...transaction, id: transations.length + 1 },
    ])
  }

  function searchTransaction(search: string) {
    const searchList = transactions.filter((transaction) =>
      transaction.description.includes(search),
    )

    setFilteredTransactions(searchList)
  }

  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((result, transaction) => result + transaction.value, 0)

  const totalOutcome = transactions
    .filter((transaction) => transaction.type === 'outcome')
    .reduce((result, transaction) => result + transaction.value, 0)

  return (
    <TransactionContext.Provider
      value={{
        filteredTransactions,
        totalIncome,
        totalOutcome,
        addNewTransaction,
        searchTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
