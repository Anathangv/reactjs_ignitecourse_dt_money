import styled from 'styled-components'

interface IValueStyleProps {
  type: string
}

export const TableRowContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  padding: 1.25rem 2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme['gray-600']};

  &:hover {
    background-color: ${(props) => props.theme['gray-700']};
  }
`
const baseStyleCell = styled.span`
  color: ${(props) => props.theme['gray-300']};
`

export const Description = styled(baseStyleCell)`
  flex-grow: 1;
`

export const Value = styled(baseStyleCell)<IValueStyleProps>`
  color: ${(props) =>
    props.type === 'income'
      ? props.theme['green-700']
      : props.theme['red-500']};
  width: 12.5rem;
`

export const Type = styled(baseStyleCell)`
  width: 15rem;
`

export const CreatedDate = styled(baseStyleCell)``
