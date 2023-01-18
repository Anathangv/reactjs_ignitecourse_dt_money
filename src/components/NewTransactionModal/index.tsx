import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useContext } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import {
  ITransaction,
  TransactionContext,
} from '../../contexts/TransactionContext'
import {
  CloseButton,
  Content,
  Overlay,
  TypeTransaction,
  TypeTransactionContainer,
} from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

/*
TODO
[] - remove border color when select outcome
*/

interface INewTransactionModal {
  closeNewTransactionModal: () => void
}

const newTransactionFormDataSchema = zod.object({
  description: zod.string(),
  category: zod.string(),
  value: zod.number(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionFormData = zod.infer<typeof newTransactionFormDataSchema>

const TransactionTypes = {
  income: 'income',
  outcome: 'outcome',
}

export function NewTransactionModal({
  closeNewTransactionModal,
}: INewTransactionModal) {
  const { addNewTransaction } = useContext(TransactionContext)
  const { register, formState, handleSubmit, reset, control } =
    useForm<NewTransactionFormData>({
      resolver: zodResolver(newTransactionFormDataSchema),
      defaultValues: {
        type: 'income',
      },
    })

  console.log('formState', formState)

  const transactionForm = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionFormDataSchema),
  })

  function handleAddNewTransaction(transaction: NewTransactionFormData) {
    console.log('handleAddNewTransaction', transaction)

    addNewTransaction({
      description: transaction.description,
      category: transaction.category,
      value: transaction.value,
      type: TransactionTypes[transaction.type],
      createdAt: new Date().toISOString(),
    } as ITransaction)

    closeNewTransactionModal()
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleAddNewTransaction)} action="">
          <FormProvider {...transactionForm}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />
            <input
              type="number"
              placeholder="Preço"
              required
              {...register('value', { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                console.log(field)

                return (
                  <TypeTransactionContainer
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TypeTransaction variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TypeTransaction>
                    <TypeTransaction variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TypeTransaction>
                  </TypeTransactionContainer>
                )
              }}
            />

            <button type="submit">Cadastrar</button>
          </FormProvider>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
