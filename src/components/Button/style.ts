import styled from 'styled-components'

export const Container = styled.button`
  border: none;
  outline: none;

  width: 100px;
  height: 25px;
  border-radius: 4px;
  background: #8a7f4b;

  font-weight: 700;

  cursor: pointer;

  transition: box-shadow 250ms;

  :active {
    border: none;
    outline: none;
  }

  :focus {
    border: none;
    outline: none;
  }

  &:hover {
    box-shadow: 0px 0px 5px 1px #8a7f4b;
  }

  & + & {
    margin-left: 5px;
  }
`
