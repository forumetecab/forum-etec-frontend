import React from 'react'
import * as S from './button.styled'

interface IProps {
  children: React.ReactNode
}

interface IRootProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export const Root = ({ children, variant = "primary", ...props }: IProps & S.IRootVariant & IRootProps) => {
  return (
    <S.Root variant={variant} {...props}>
      {children}
    </S.Root>
  )
}

export const Text = ({ children }: IProps) => {

  return (
    <S.Text>
      {children}
    </S.Text>
  )
}

export const Icon = ({ children }: IProps) => {

  return (
    <S.Icon>
      {children}
    </S.Icon >
  )
}
