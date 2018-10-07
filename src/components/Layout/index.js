import React, { Component } from "react"
import { node } from "prop-types"

import { Header } from "../Header"

export class Layout extends Component {
  static propTypes = {
    children: node
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
      </div>
    )
  }
}
