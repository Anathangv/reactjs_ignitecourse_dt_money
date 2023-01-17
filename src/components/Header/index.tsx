import logoDtMonet from '../../assets/logo.svg'
import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)

  function closeNewTransactionModal() {
    setOpen((open) => !open)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDtMonet} alt="" />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <ButtonNewTransaction>Nova Transaction</ButtonNewTransaction>
          </Dialog.Trigger>

          <NewTransactionModal
            closeNewTransactionModal={closeNewTransactionModal}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
