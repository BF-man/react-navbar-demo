import React, { Component, Fragment } from "react"

import { Navbar } from "../Navbar"
import { Search } from "../Search"
import { StyledHeader, Spacer } from "./styles"

export class Header extends Component {
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
    if (scrollY > 0 && isExpanded) {
      return this.setState({ isExpanded: false })
    }

    if (scrollY === 0 && !isExpanded) {
      return this.setState({ isExpanded: true })
    }
  }

  render() {
    const { isExpanded } = this.state
    return (
      <Fragment>
        <StyledHeader>
          <Navbar />
          <Search isExpanded={isExpanded} />
        </StyledHeader>
        <Spacer isExpanded={isExpanded} />
      </Fragment>
    )
  }
}
