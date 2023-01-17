import { createContext, ReactNode, useEffect, useState } from 'react'

interface TransactionContextProps {
  children: ReactNode
}

export type TransactionType = 'income' | 'outcome'

export interface ITransaction {
  description: string
  value: number
  category: string
  type: TransactionType
  creationDate: Date
}

interface ITransactionContext {
  filteredTransactions: ITransaction[]
  totalIncome: number
  totalOutcome: number
  addNewTransaction: (transaction: ITransaction) => void
  searchTransaction: (search: string) => void
}

export const TransactionContext = createContext({} as ITransactionContext)

export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  const [filteredTransactions, setFilteredTransactions] =
    useState<ITransaction[]>(transactions)

  useEffect(() => {
    setFilteredTransactions(transactions)
  }, [transactions])

  function addNewTransaction(transaction: ITransaction) {
    console.log('addNewTransaction', transaction)

    setTransactions((transations) => [...transations, transaction])
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
