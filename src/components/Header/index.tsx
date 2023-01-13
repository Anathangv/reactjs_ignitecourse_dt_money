import logoDtMonet from '../../assets/logo.svg'
import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDtMonet} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonNewTransaction>Nova Transaction</ButtonNewTransaction>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
