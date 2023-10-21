import theme from 'src/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: grid;
`

export const Image = styled.img`
width: 100%;
height: 20rem;
object-fit: cover;
object-position: center;
border-radius: 4px;
object-position: top;

@media (max-width: 768px) {
  height: 10rem;
}

`

export const LogoContainer = styled.div`
display: flex;
height: 8rem;
background-color: #fff;
border: 2px solid ${theme.color.gray};
align-items: center;
justify-content: center;
justify-self: center;
width: fit-content;
border-radius: 4px;
padding: 0.5rem;
transform: translateY(-50%);

`

export const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
padding: 0 1rem;
padding-bottom: 1rem;
display: grid;
gap: 2rem;
justify-items: center;
text-align: center;
`

export const ButtonWrapper = styled.div`
display: grid;
width: 100%;
gap: 1rem;
`

