import { Header } from '../../components/Header'
import { Dashboard } from './components/Dashboard'
import { Table } from './components/Table'
import { HomeContainer } from './styles'

/*
Technology
 - react
  - useCallback
  - memo
 - styled-components  
  - useTheme
  - ThemeProvider
  - createGlobalStyle
 - phosphor icons
 - radix-ui
  - react-dialog
  - react-radio-group
 - react-hook-form
  - uncontrolled
  - controlled
    - Controller
  - hookform/resolvers
  - zod
 - Intl - formatter
 - json-server
  - full-text search
  - query params, sort and order
 - custom hook
 - axios
 - use-context-selector / scheduler - watch a especif information and not to others in this context

*/
export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Dashboard />
        <Table />
      </HomeContainer>
    </>
  )
}
