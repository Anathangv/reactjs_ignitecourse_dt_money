import logoDtMonet from '../../assets/logo.svg'
import { ButtonNewTransaction, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDtMonet} alt="" />
        <ButtonNewTransaction>Nova Transaction</ButtonNewTransaction>
      </HeaderContent>
    </HeaderContainer>
  )
}
