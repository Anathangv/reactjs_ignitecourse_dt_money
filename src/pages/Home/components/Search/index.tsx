import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { ButtonSearch, InputSearch, SearchFormContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../../contexts/TransactionContext'
import { MagnifyingGlass } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'

const searchDataSchema = zod.object({
  query: zod.string(),
})

type SearchFormData = zod.infer<typeof searchDataSchema>

/*
use of memo unnecessary in this case, only use for rerendering study
*/
function SearchComponent() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchDataSchema),
  })

  /*
  use-context-selector - useContextSelector - is used to avoid the component be rerendered 
  when any other information of the context changes but this component has not dependency
  */
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

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

export const Search = memo(SearchComponent)
