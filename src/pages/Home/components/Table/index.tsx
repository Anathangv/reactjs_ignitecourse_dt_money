import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionProvider'
import { TableRow } from '../TableRow'
import { TableContainer } from './styles'

export function Table() {
  const { transactions } = useContext(TransactionContext)

  return (
    <TableContainer>
      {transactions &&
        transactions.map((transaction) => (
          <TableRow
            key={`${transaction.description}-${transaction.category}`}
          />
        ))}
    </TableContainer>
  )
}
