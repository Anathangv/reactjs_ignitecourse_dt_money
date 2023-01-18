import React from 'react'
import { valueFormatter } from '../../../../utils/formatter'
import { CardContainer } from './styles'

interface ICardPorps {
  title: string
  icon: React.ReactNode
  value: number
  cardColor?: string
}

export function Card({ title, value, icon, cardColor }: ICardPorps) {
  return (
    <CardContainer cardColor={cardColor}>
      <header>
        <span>{title}</span>
        {icon}
      </header>
      <div>
        <span>
          <strong>{valueFormatter.format(value)}</strong>
        </span>
      </div>
    </CardContainer>
  )
}
