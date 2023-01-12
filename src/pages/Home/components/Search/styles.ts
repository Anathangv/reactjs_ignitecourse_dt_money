import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  gap: 1rem;
`

export const InputSearch = styled.input`
  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['gray-900']};
  border: none;
  flex-grow: 1;
`
export const ButtonSearch = styled.button`
  height: 3.375rem;
  padding: 0 2rem;
  color: ${(props) => props.theme['green-700']};
  font-weight: 700;
  background-color: ${(props) => props.theme['gray-700']};
  border: 1px solid ${(props) => props.theme['green-700']};
  border-radius: 6px;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['green-300']};
    border-color: ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme.white};
  }
`
