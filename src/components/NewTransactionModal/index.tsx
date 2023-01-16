import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useContext } from 'react'
import {
  ITransaction,
  TransactionContext,
} from '../../contexts/TransactionProvider'
import {
  CloseButton,
  Content,
  Overlay,
  TypeTransactionButton,
  TypeTransactionContainer,
} from './styles'

export function NewTransactionModal() {
  const { addNewTransaction } = useContext(TransactionContext)

  function handleSubmit(event: any) {
    event.preventDefault()

    addNewTransaction({
      description: 'teste',
      category: 'teste',
      type: 'Expense',
      value: 1000,
    } as ITransaction)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TypeTransactionContainer>
            <TypeTransactionButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TypeTransactionButton>
            <TypeTransactionButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TypeTransactionButton>
          </TypeTransactionContainer>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
