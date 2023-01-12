import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { Card } from '../Card'
import { DashboardContainer } from './styles'
import { useTheme } from 'styled-components'

export function Dashboard() {
  const theme = useTheme()

  return (
    <DashboardContainer>
      <Card
        title="Entradas"
        value={17000}
        icon={<ArrowCircleDown size={32} color={theme['green-300']} />}
      />
      <Card
        title="Saídas"
        value={5000}
        icon={<ArrowCircleUp size={32} color={theme['red-300']} />}
      />
      <Card
        title="Total"
        value={32000}
        icon={<CurrencyDollar size={32} color={theme.white} />}
        cardColor={theme['green-700']}
      />
    </DashboardContainer>
  )
}
