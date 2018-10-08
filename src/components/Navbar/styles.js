import { css } from "react-emotion"

import { media } from "../../variables"

export const navbar = css`
  display: flex;
  max-width: 113.4rem;
  margin: 0 auto;
  align-items: center;
  height: 4.5rem;

  @media (${media.medium}) {
    max-width: 80rem;
  }
`

export const navigation = css`
  display: flex;
  margin: 0 auto 0 7.8rem;
  height: 100%;
`

export const avatar = css`
  margin-left: 2.6rem;
`
