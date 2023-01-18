import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionContext'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Home />
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
