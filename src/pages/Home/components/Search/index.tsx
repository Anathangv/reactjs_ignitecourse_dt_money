import { useForm } from 'react-hook-form'
import { ButtonSearch, InputSearch, SearchFormContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionContext'
import { MagnifyingGlass } from 'phosphor-react'

const searchDataSchema = zod.object({
  query: zod.string(),
})

type SearchFormData = zod.infer<typeof searchDataSchema>

export function Search() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchDataSchema),
  })

  const { fetchTransactions } = useContext(TransactionContext)

  async function handleSearchTransaction({ query }: SearchFormData) {
    await fetchTransactions(query)
  }

  return (
    <SearchFormContainer
      onSubmit={handleSubmit(handleSearchTransaction)}
      action=""
    >
      <InputSearch placeholder="Busque por transações" {...register('query')} />
      <ButtonSearch type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        Buscar
      </ButtonSearch>
    </SearchFormContainer>
  )
}
