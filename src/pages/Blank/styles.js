import styled from "react-emotion"

import { media } from "../../variables"

export const Container = styled("div")`
  max-width: 113.3rem;
  margin: 0 auto;
  margin-top: 6rem;
  line-height: 1.5;
  text-align: justify;

  @media (${media.medium}) {
    max-width: 80rem;
  }
`
