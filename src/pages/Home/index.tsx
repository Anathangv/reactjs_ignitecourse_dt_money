import { Header } from '../../components/Header'
import { Dashboard } from './components/Dashboard'
import { Table } from './components/Table'
import { HomeContainer } from './styles'

/*
TODO
[] - include edit and delete functionality
[] - CRUD for category
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
