import { ButtonSearch, InputSearch, SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <InputSearch placeholder="Busque uma transação" />
      <ButtonSearch>Buscar</ButtonSearch>
    </SearchContainer>
  )
}
