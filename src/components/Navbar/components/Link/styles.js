import { css } from "react-emotion"

import { colors } from "../../../../variables"

export const linkCN = css`
  margin-right: 4.4rem;
  font-weight: 700;
  text-decoration: none;
  color: ${colors.gray};
  height: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
  border-top: 0.4rem solid transparent;
  border-bottom: 0.4rem solid transparent;
  transition: border 0.5s;

  &:hover {
    border-bottom: 0.4rem solid ${colors.blue};
  }
`

export const activeCN = css`
  border-bottom: 0.4rem solid ${colors.blue};
`
