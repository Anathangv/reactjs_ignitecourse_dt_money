import { Dashboard } from './components/Dashboard'
import { Search } from './components/Search'
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
*/
type TransactionTypes = 'Income' | 'Expense'

export interface Itransation {
  description: string
  value: number
  category: string
  type: TransactionTypes
}

export function Home() {
  return (
    <HomeContainer>
      <Dashboard />
      <Search />
      <Table />
    </HomeContainer>
  )
}
