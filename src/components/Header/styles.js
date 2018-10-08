import styled from "react-emotion"

import { colors } from "../../variables"

export const StyledHeader = styled("div")`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${colors.white};
  transform: translate3d(0, 0, 0);
`

export const Spacer = styled("div")`
  height: ${({ isExpanded }) => (isExpanded ? 63.2 : 13)}rem;
`
