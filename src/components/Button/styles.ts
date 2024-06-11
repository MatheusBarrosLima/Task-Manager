import styled from "styled-components";

export type ButtonStyle = "primary" | "secondary" | "complementary" | "danger" | "check";

type ButtonContainer = {
  variant: ButtonStyle;
};

const COLORS = {
  check: "CHECK",
  primary: "PRIMARY700",
  secondary: "PRIMARY500",
  complementary: "COMPLEMENTARY",
  danger: "DANGER200",
} as const;

export const Container = styled.button<ButtonContainer>`
  background: ${({ theme, variant }) => theme.colors[COLORS[variant]]};

  box-shadow: 1px 1px 1px #0004;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1.2rem;
  width: 100%;
  margin: 0 auto;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: default;
    filter: brightness(0.8);
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
