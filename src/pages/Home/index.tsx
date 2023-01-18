import { Header } from '../../components/Header'
import { Dashboard } from './components/Dashboard'
import { Table } from './components/Table'
import { HomeContainer } from './styles'

/*
Technology
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
 - custom hook
 - fetch
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
