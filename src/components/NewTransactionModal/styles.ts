import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 33rem;
  border-radius: 6px;
  padding: 3rem;
  background-color: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      width: 100%;
      border: none;
      padding: 1rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-500']};
    }

    button[type='submit'] {
      margin-top: 1.5rem;
      height: 50px;
      padding: 1rem 0;
      border-radius: 6px;
      border: none;
      font-weight: bold;
      cursor: pointer;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['green-500']};

      &:hover {
        background-color: ${(props) => props.theme['green-700']};
        transition: background-color 0.4s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  border: 0;
  right: 1.5rem;
  background: transparent;
  line-height: 0;
  border: none;
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;
`

export const TypeTransactionContainer = styled(RadioGroup.Root)`
  width: 100%;
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
interface TypeTransactionButtonProps {
  variant: 'income' | 'outcome'
}

// eslint-disable-next-line prettier/prettier
export const TypeTransactionButton = styled(RadioGroup.Item)<TypeTransactionButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['gray-600']};
    transition: background-color 0.2s;
  }

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['gray-600']};
  }
`
