import React, { Component, Fragment } from "react"

import { SearchInput } from "./components/SearchInput"
import {
  titleCN,
  ChangeLocationButton,
  InputContainer,
  StyledAnimatedSearchContainer,
  Spacer
} from "./styles"

const SCROLL_THRESHOLD = 310 //px

export class Search extends Component {
  state = { isExpanded: true }

  componentDidMount() {
    window.addEventListener("scroll", this.handleWindowScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleWindowScroll)
  }

  handleWindowScroll = () => {
    const scrollY = window.scrollY
    const { isExpanded } = this.state
    if (scrollY > SCROLL_THRESHOLD && isExpanded) {
      return this.setState({ isExpanded: false })
    }

    if (scrollY < SCROLL_THRESHOLD - 20 && !isExpanded) {
      return this.setState({ isExpanded: true })
    }
  }

  render() {
    const { isExpanded } = this.state
    const pose = isExpanded ? "expanded" : "collapsed"
    return (
      <Fragment>
        <StyledAnimatedSearchContainer pose={pose} isExpanded={isExpanded}>
          {isExpanded ? (
            <div className={titleCN} pose={pose}>
              Doming consetetur conclusionemque
              <br />
              vis ex, te duo odio accumsan.
            </div>
          ) : null}
          <InputContainer isExpanded={isExpanded}>
            <SearchInput theme={isExpanded ? "blue" : "dark"} />
          </InputContainer>
          {isExpanded ? (
            <ChangeLocationButton>Change Location</ChangeLocationButton>
          ) : null}
        </StyledAnimatedSearchContainer>
        {isExpanded ? null : <Spacer />}
      </Fragment>
    )
  }
}
