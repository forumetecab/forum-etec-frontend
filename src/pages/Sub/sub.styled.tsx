import theme from 'src/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Image = styled.img`
width: 100%;
height: 20rem;
object-fit: cover;
object-position: center;
border-radius: 4px;
object-position: top;

@media (max-width: 768px) {
  height: 15rem;
}

`

export const LogoContainer = styled.div`
position: absolute;
top: 17rem;
left: 1rem;

@media (max-width: 768px) {
  top: 13rem;
}
`

export const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
margin-top: 3rem;
padding: 0 1rem;
display: grid;
gap: 1rem;
`

export const Form = styled.form`
  display: grid;
  gap: 1rem;

  .react-date-picker__wrapper {
    border: 2px solid ${theme.color.gray};
    outline: none;
    border-radius: 4px;
    padding: 0.25rem 1rem;
  }

  .react-date-picker__inputGroup {
  }
`

export const Event = styled.div`
background-color: ${theme.color.grayLight};
  padding: 1rem;
  border-radius: 4px;
`

export const EventContent = styled.div``
