import React, { Component } from "react"

import { Container } from "./styles"

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt
mollit anim id est laborum.`

const content = Array.from(Array(40)).map((_, i) => <p key={i}>{text}</p>)

class Blank extends Component {
  render() {
    return <Container>{content}</Container>
  }
}

export default Blank
