import styled, { css } from "react-emotion"

import { colors } from "../../../../variables"

export const search = css`
  display: flex;
  flex-wrap: nowrap;
  width: 74.5rem;
  height: 5.4rem;
  background-color: ${colors.white};
  border-radius: 2px;

  & > * {
    border-radius: 2px;
    height: 100%;
    font-weight: 700;
  }
`

export const textInput = css`
  flex: 1;
  border: none;
  padding: 1.4rem 2rem;
  font-size: 1.4rem;

  &::placeholder {
    font-size: 1.4rem;
    opacity: 0.5;
    color: ${colors.gray};
  }
`

export const select = css`
  width: 16.4rem;
  display: flex;
  align-items: center;

  & > &__control {
    border: none;
    border-left: 1px dashed #979797;
    height: 3.7rem;
    width: 100%;
    border-radius: 0;
  }

  &__control > &__value-container {
    padding-left: 1.9rem;
  }

  &__value-container > &__placeholder {
    color: ${colors.gray};
  }

  &__indicators > &__indicator-separator {
    display: none;
  }

  &__indicators > &__dropdown-indicator {
    padding-right: 1.9rem;

    & > svg > path {
      fill: ${colors.gray};
    }
  }

  & > &__control--is-focused {
    box-shadow: none;
  }

  & > &__menu {
    margin-top: 0;
    border-radius: 2px;
  }
`

export const Button = styled("div")`
  width: 5.4rem;
  background-color: ${({ theme }) =>
    theme === "blue" ? colors.blue : colors.gray};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.87;
  }
`
