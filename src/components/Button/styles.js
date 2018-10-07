import { css } from "react-emotion"

import { colors } from "../../variables"

export const button = css`
  background-color: ${colors.blue};
  border-radius: 2px;
  height: 3rem;
  padding: 0 3rem;
  color: ${colors.white};
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`
