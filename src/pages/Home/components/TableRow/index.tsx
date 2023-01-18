import { ITransaction } from '../../../../contexts/TransactionContext'
import { dateFormatter, valueFormatter } from '../../../../utils/formatter'
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
          {` ${
            transaction.type === 'outcome' ? '-' : ''
          } R$ ${valueFormatter.format(transaction.value)}`}
        </PriceHighlight>
      </td>
      <td>{transaction.category}</td>
      <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
    </TableRowContainer>
  )
}
