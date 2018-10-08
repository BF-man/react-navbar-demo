import styled, { css } from "react-emotion"

import { SearchContainer } from "./animations"
import { colors, media } from "../../variables"

export const titleCN = css`
  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5.1rem;
`

export const InputContainer = styled("div")`
  max-width: 113.4rem;
  margin: 0 auto;
  transform: translate(
    ${({ isExpanded }) => (isExpanded ? "calc((100% - 74rem)/2)" : "0")}
  );
  transition: transform 0.5s;

  @media (${media.medium}) {
    max-width: 80rem;
  }
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
export const StyledAnimatedSearchContainer = styled(SearchContainer)`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: ${({ isExpanded }) => (isExpanded ? "static" : "fixed")};
  width: 100%;
  overflow: hidden;
`

export const Spacer = styled("div")`
  height: 40rem;
`
