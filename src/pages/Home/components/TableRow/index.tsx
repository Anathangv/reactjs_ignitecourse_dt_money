import { format } from 'date-fns'
import { ITransaction } from '../../../../contexts/TransactionProvider'
import {
  CreatedDate,
  Description,
  TableRowContainer,
  Category,
  Value,
} from './styles'

interface ITableRow {
  transaction: ITransaction
}

export function TableRow({ transaction }: ITableRow) {
  return (
    <TableRowContainer>
      <Description>{transaction.description}</Description>
      <Value type={transaction.type}>{` ${
        transaction.type === 'outcome' ? '-' : ''
      } R$ ${transaction.value}`}</Value>
      <Category>{transaction.category}</Category>
      <CreatedDate>
        {format(transaction.creationDate, 'dd/MM/yyyy')}
      </CreatedDate>
    </TableRowContainer>
  )
}
