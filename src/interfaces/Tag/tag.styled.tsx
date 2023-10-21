import theme from "src/styles/theme"
import styled from "styled-components"
import { variant } from "styled-system"

interface Props {
  type?: "title" | "tag"
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Root = styled.div<Props>`
display: flex;
align-items: center;
border-radius: 4px;
padding: 0.3rem 0.5rem;
background-color: ${theme.color.red};
gap: 0.3rem;
color: #fff;
width: fit-content;
font-family: "Roboto", sans-serif;
font-size: 1.5rem;

${variant({
  prop: "type",
  variants: {
    title: {
      fontFamily: "'Outfit', sans-serif",
    },
    tag: {
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: theme.color.grayLight,
      color: theme.color.red,
      border: `2px solid ${theme.color.gray}`
    }
  }
})}

${variant({
  prop: "size",
  variants: {
    sm: {
      fontSize: "0.875rem"
    },
    md: {
      fontSize: "1rem"
    },
    lg: {
      fontSize: "1.5rem"
    },
    xl: {
      fontSize: "2rem",
      lineHeight: "1.25",
      "@media(max-width: 700px)": {
        fontSize: "1.5rem"
      }

    },
    "2xl": {
      fontSize: "3rem",
      "@media(max-width: 700px)": {
        fontSize: "2rem"
      }
    }
  }
})}


`

export const Text = styled.p`
font-weight: 500;
`

export const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;

svg, path {
  }
`
