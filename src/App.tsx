import { Header } from './components/Header'
import { TransactionProvider } from './contexts/TransactionProvider'
import { Home } from './pages/Home'

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
    </TransactionProvider>
  )
}

export default App
