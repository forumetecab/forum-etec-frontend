import theme from 'src/styles/theme'
import styled from 'styled-components'

export const Root = styled.div`
  display: grid;
  gap: 0.2rem;
`

export const Label = styled.label``

export const Field = styled.input`
  border: 2px solid ${theme.color.gray};
  border-radius: 4px;
  padding: 0.5rem 0.85rem;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: 2px solid ${theme.color.red};
    background-color: #f5f5f5;
  }
`
