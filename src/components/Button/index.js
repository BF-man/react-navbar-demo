import React, { PureComponent } from "react"

import { button } from "./styles"

export class Button extends PureComponent {
  render() {
    return <div className={button} {...this.props} />
  }
}
