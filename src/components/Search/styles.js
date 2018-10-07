import styled, { css } from "react-emotion"

import { colors } from "../../variables"

export const titleCN = css`
  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5.1rem;
`

export const inputContainerCN = css`
  margin: 0 auto;
`

export const ChangeLocationButton = styled("div")`
  color: ${colors.gray};
  text-decoration: underline;
  font-size: 1.2rem;
  width: 74.5rem;
  text-align: right;
  margin: 0.7rem auto 0;
  padding: 0 10.5rem;
  cursor: pointer;
`
