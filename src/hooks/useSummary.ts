import { TransactionContext } from '../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'
import { useMemo } from 'react'

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  /*
  useMemo - used to avoid that this variable being recreated/recalculate from scratch every time useSummary is recreated,
  it is used in the dashboard component, when it changes the childrens also change
  */

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return summary
}
