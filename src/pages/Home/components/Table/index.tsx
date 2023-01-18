import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionContext'
import { Search } from '../Search'
import { TableRow } from '../TableRow'
import { TableContainer } from './styles'

export function Table() {
  const { transactions } = useContext(TransactionContext)

  return (
    <>
      <Search />

      <TableContainer>
        <tbody>
          {transactions &&
            transactions.map((transaction) => (
              <TableRow transaction={transaction} key={transaction.id} />
            ))}
        </tbody>
      </TableContainer>
    </>
  )
}
