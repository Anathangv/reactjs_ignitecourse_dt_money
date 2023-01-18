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
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchDataSchema),
  })

  const { searchTransaction } = useContext(TransactionContext)

  async function handleSearchTransaction({ search }: SearchFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
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
      <ButtonSearch type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        Buscar
      </ButtonSearch>
    </SearchFormContainer>
  )
}
