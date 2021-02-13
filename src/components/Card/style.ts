import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: inset 0px 0px 12px -8px #297dbd;
  border-top: 1px solid #8a7f4b;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 0 30px;
  min-width: 180px;
  min-height: 230px;
  max-height: 230px;
  align-items: center;
  background-color: #141e28;
  user-select: none;
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`

export const PokeId = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  cursor: default;

  span {
    position: absolute;
    padding: 0px 2px;
    border-radius: 0 0 6px;

    font-family: 'Sriracha', cursive;
    font-size: 12px;
    background-color: #8a7f4b;
    color: #000;
  }
`

export const PokemonName = styled.span`
  font-family: 'Sriracha', cursive;
  font-size: 18px;
  text-transform: capitalize;
  color: #8a7f4b;
  user-select: text;
`

export const PokeType = styled.div`
  display: flex;
  font-family: 'Sriracha', cursive;
  font-size: 14px;
  text-transform: capitalize;
  color: #8a7f4b;
`

interface PokeTypeNameProps {
  colorScheme: string
}

export const PokeTypeName = styled.p<PokeTypeNameProps>`
  margin: 0;
  border-radius: 5px;
  padding: 0 4px;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ colorScheme }) => `${colorScheme}`};
  color: ${({ colorScheme }) => `${colorScheme}99`};

  & + p {
    margin-left: 5px;
  }
`
