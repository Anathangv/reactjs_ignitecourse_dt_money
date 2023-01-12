import { Dashboard } from './components/Dashboard'
import { Search } from './components/Search'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Dashboard />
      <Search />
    </HomeContainer>
  )
}
