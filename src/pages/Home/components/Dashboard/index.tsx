import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { Card } from '../Card'
import { DashboardContainer } from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionContext'

export function Dashboard() {
  const theme = useTheme()
  const { transactions } = useContext(TransactionContext)

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.value
        acc.total += transaction.value
      } else {
        acc.outcome -= transaction.value
        acc.total -= transaction.value
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <DashboardContainer>
      <Card
        title="Entradas"
        value={sumary.income}
        icon={<ArrowCircleDown size={32} color={theme['green-300']} />}
      />
      <Card
        title="Saídas"
        value={sumary.outcome}
        icon={<ArrowCircleUp size={32} color={theme['red-300']} />}
      />
      <Card
        title="Total"
        value={sumary.total}
        icon={<CurrencyDollar size={32} color={theme.white} />}
        cardColor={theme['green-700']}
      />
    </DashboardContainer>
  )
}
