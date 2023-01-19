import { TransactionContext } from '../../../../contexts/TransactionContext'
import { Search } from '../Search'
import { TableRow } from '../TableRow'
import { TableContainer } from './styles'
import { useContextSelector } from 'use-context-selector'

export function Table() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

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
