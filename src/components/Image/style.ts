import styled from 'styled-components'

interface ContainerProps {
  colorScheme: string
}

export const Container = styled.img<ContainerProps>`
  padding: 10px;
  width: 105px;
  height: 105px;
  border-radius: 50%;
  box-shadow: ${({ colorScheme }) =>
    `${colorScheme} -14px -17px 21px -17px inset, ${colorScheme} 0 0 10px -5px inset`};
  background-color: ffffff00;
  user-select: none;
`
