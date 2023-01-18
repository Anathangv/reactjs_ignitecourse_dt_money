import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { Card } from '../Card'
import { DashboardContainer } from './styles'
import { useTheme } from 'styled-components'
import { useSummary } from '../../../../hooks/useSummary'

export function Dashboard() {
  const theme = useTheme()

  const summary = useSummary()

  return (
    <DashboardContainer>
      <Card
        title="Entradas"
        value={summary.income}
        icon={<ArrowCircleDown size={32} color={theme['green-300']} />}
      />
      <Card
        title="Saídas"
        value={summary.outcome}
        icon={<ArrowCircleUp size={32} color={theme['red-300']} />}
      />
      <Card
        title="Total"
        value={summary.total}
        icon={<CurrencyDollar size={32} color={theme.white} />}
        cardColor={theme['green-700']}
      />
    </DashboardContainer>
  )
}
