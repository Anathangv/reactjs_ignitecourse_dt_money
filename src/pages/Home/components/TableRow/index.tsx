import { format, parseISO } from 'date-fns'
import { ITransaction } from '../../../../contexts/TransactionContext'
import { TableRowContainer, PriceHighlight } from './styles'

interface ITableRow {
  transaction: ITransaction
}

export function TableRow({ transaction }: ITableRow) {
  return (
    <TableRowContainer>
      <td>{transaction.description}</td>
      <td>
        <PriceHighlight variant={transaction.type}>
          {` ${transaction.type === 'outcome' ? '-' : ''} R$ ${
            transaction.value
          }`}
        </PriceHighlight>
      </td>
      <td>{transaction.category}</td>
      <td>{format(parseISO(transaction.createdAt), 'dd/MM/yyyy')}</td>
    </TableRowContainer>
  )
}
