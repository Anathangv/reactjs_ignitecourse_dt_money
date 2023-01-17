import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { Card } from '../Card'
import { DashboardContainer } from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionProvider'

export function Dashboard() {
  const theme = useTheme()
  const { totalIncome, totalOutcome } = useContext(TransactionContext)

  return (
    <DashboardContainer>
      <Card
        title="Entradas"
        value={totalIncome}
        icon={<ArrowCircleDown size={32} color={theme['green-300']} />}
      />
      <Card
        title="Saídas"
        value={totalOutcome}
        icon={<ArrowCircleUp size={32} color={theme['red-300']} />}
      />
      <Card
        title="Total"
        value={totalIncome - totalOutcome}
        icon={<CurrencyDollar size={32} color={theme.white} />}
        cardColor={theme['green-700']}
      />
    </DashboardContainer>
  )
}
