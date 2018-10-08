import React, { Component } from "react"

import { Navbar } from "../Navbar"
import { Search } from "../Search"
import { StyledHeader } from "./styles"

export class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Navbar />
        <Search />
      </StyledHeader>
    )
  }
}
