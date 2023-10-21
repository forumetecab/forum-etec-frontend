import theme from "src/styles/theme";
import styled from "styled-components";
import { variant } from "styled-system";

export interface IRootVariant {
  variant?: "primary" | "secondary";
}

export const Root = styled.button<IRootVariant>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: ${theme.color.red};
  color: #fff;
  width: 100%;
  cursor: pointer;
  border: 2px solid ${theme.color.red};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${variant({
    variants: {
      primary: {
        bg: theme.color.red,
        color: "#fff",
        "&:hover": {
          bg: "#B83636",
        },
        "&:active": {
          bg: "#AB2E2E",
        },
      },
      secondary: {
        bg: "#fff",
        color: theme.color.red,
        "&:hover": {
          bg: theme.color.grayLight,
          color: theme.color.red,
        },
        "&:active": {
          bg: theme.color.gray,
        },
      },
    },
  })}
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  path {
    width: 80%;
    height: 80%;
    color: inherit;
    background-color: inherit;
  }
`;
