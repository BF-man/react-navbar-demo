import React, { Component } from "react"
import { NavLink } from "react-router-dom"

import { activeCN, linkCN } from "./styles"
export class Link extends Component {
  render() {
    return (
      <NavLink activeClassName={activeCN} className={linkCN} {...this.props} />
    )
  }
}
