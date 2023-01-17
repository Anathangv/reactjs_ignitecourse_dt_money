import { useForm } from 'react-hook-form'
import { ButtonSearch, InputSearch, SearchFormContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionProvider'

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
      <InputSearch placeholder="Busque uma transação" {...register('search')} />
      <ButtonSearch type="submit">Buscar</ButtonSearch>
    </SearchFormContainer>
  )
}
