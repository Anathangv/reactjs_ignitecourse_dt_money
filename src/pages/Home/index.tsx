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
  - react-radio-group
*/
export function Home() {
  return (
    <HomeContainer>
      <Dashboard />
      <Search />
      <Table />
    </HomeContainer>
  )
}
