import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TypeTransactionButton,
  TypeTransactionContainer,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
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
