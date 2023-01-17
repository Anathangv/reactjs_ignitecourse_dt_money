import React from 'react'
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
          <strong>{`R$ ${value}`}</strong>
        </span>
      </div>
    </CardContainer>
  )
}
