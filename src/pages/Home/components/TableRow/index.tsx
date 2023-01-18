import { format } from 'date-fns'
import { ITransaction } from '../../../../contexts/TransactionProvider'
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
      <td>{format(transaction.creationDate, 'dd/MM/yyyy')}</td>
    </TableRowContainer>
  )
}
