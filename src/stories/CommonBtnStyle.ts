import styled from "styled-components";

interface CommonButtonProps {
  size?: "small" | "medium" | "large";
  color?: string;
  disabled?: boolean;
}

const sizeStyles = {
  small: `
      padding: 0.5rem 1rem;
      font-size: 1.4rem;
    `,
  medium: `
      padding: 1rem 2rem;
      font-size: 1.6rem;
    `,
  large: `
      padding: 1.5rem 3rem;
      font-size: 1.8rem;
    `,
};

export const CommonButton = styled.button<CommonButtonProps>`
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -1px;
  border: none;
  border-radius: 1rem;
  width: 100%;
  color: white;
  background-color: ${(props) => props.color};
  ${(props) => sizeStyles[props.size || "medium"]}

  &:disabled {
    color: #666666;
    cursor: not-allowed;
  }
  @media screen and (max-width: 480px) {
    font-weight: bold;
    font-size: 1.6rem;
  }
`;
