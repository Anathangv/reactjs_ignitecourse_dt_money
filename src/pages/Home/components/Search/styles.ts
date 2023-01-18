import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  gap: 1rem;
`

export const InputSearch = styled.input`
  border-radius: 6px;
  padding: 1rem;
  color: ${(props) => props.theme['gray-300']};
  background-color: ${(props) => props.theme['gray-900']};
  border: none;
  flex-grow: 1;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
export const ButtonSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 0 2rem;
  font-weight: 700;
  color: ${(props) => props.theme['green-300']};
  background: transparent;
  border: 1px solid ${(props) => props.theme['green-300']};
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['green-500']};
    border-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    transition: background-color 0.4s, color 0.4s, border-color 0.4s;
  }
`
