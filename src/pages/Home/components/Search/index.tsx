import { useForm } from 'react-hook-form'
import { ButtonSearch, InputSearch, SearchFormContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionContext'
import { MagnifyingGlass } from 'phosphor-react'

const searchDataSchema = zod.object({
  search: zod.string(),
})

type SearchFormData = zod.infer<typeof searchDataSchema>

export function Search() {
  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(searchDataSchema),
  })

  const { searchTransaction } = useContext(TransactionContext)

  function handleSearchTransaction({ search }: SearchFormData) {
    searchTransaction(search)
  }

  return (
    <SearchFormContainer
      onSubmit={handleSubmit(handleSearchTransaction)}
      action=""
    >
      <InputSearch
        placeholder="Busque por transações"
        {...register('search')}
      />
      <ButtonSearch type="submit">
        <MagnifyingGlass size={24} />
        Buscar
      </ButtonSearch>
    </SearchFormContainer>
  )
}
