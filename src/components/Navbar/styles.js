import { css } from "react-emotion"

import { colors, media } from "../../variables"

export const navbarCN = css`
  position: fixed;
  width: 100%;
  top: 0;
  height: 4.5rem;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  z-index: 1;

  & > div {
    display: flex;
    flex: 1;
    max-width: 113.4rem;
    margin: 0 auto;
    align-items: center;
    height: 100%;

    & > img {
      height: 3rem;
    }
  }

  @media (${media.medium}) {
    & > div {
      max-width: 80rem;
    }
  }
`

export const navigationCN = css`
  display: flex;
  margin: 0 auto 0 7.8rem;
  height: 100%;
`

export const avatarCN = css`
  margin-left: 2.6rem;
`

export const spacerCN = css`
  height: 4.5rem;
`
