import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionProvider'
import { TableRow } from '../TableRow'
import { TableContainer } from './styles'

export function Table() {
  const { filteredTransactions } = useContext(TransactionContext)

  return (
    <TableContainer>
      {filteredTransactions &&
        filteredTransactions.map((transaction) => (
          <TableRow
            transaction={transaction}
            key={transaction.creationDate.toDateString()}
          />
        ))}
    </TableContainer>
  )
}
