import {
  CreatedDate,
  Description,
  TableRowContainer,
  Type,
  Value,
} from './styles'

export function TableRow() {
  return (
    <TableRowContainer>
      <Description>Desenvolvimento de site</Description>
      <Value type={'teste'}>1200</Value>
      <Type>Venda</Type>
      <CreatedDate>13/04/2022</CreatedDate>
    </TableRowContainer>
  )
}
