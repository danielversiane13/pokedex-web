import { ButtonHTMLAttributes } from 'react'

import { Container } from './style'

export default function Button({
  children,
  ...rest
}: WithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <Container {...rest}>{children}</Container>
}
