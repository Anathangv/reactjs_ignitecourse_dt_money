import styled from 'styled-components'

interface ICardContainerStyled {
  cardColor?: string
}

export const CardContainer = styled.div<ICardContainerStyled>`
  border-radius: 6px;
  background-color: ${(props) =>
    props.cardColor ? props.cardColor : props.theme['gray-600']};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${(props) => props.theme['gray-300']};
      font-weight: 700;
    }
  }

  div > span {
    font-size: 2rem;
    font-weight: 700;
  }
`
