import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background-color: ${(props) => props.theme['gray-900']};
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  height: 50px;
  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonNewTransaction = styled.button`
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  height: 50px;
  padding: 0 1.25rem;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme['green-300']};
    transition: 0.4s;
    cursor: pointer;
  }
`
