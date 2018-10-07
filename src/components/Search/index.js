import React, { Component } from "react"
import { bool } from "prop-types"

import { SearchInput } from "./components/SearchInput"
import { SearchContainer, InputContainer } from "./animations"
import { titleCN, inputContainerCN } from "./styles"

export class Search extends Component {
  static propTypes = {
    isExpanded: bool.isRequired
  }

  render() {
    const { isExpanded } = this.props
    const pose = isExpanded ? "expanded" : "collapsed"
    return (
      <SearchContainer pose={pose}>
        {isExpanded ? (
          <div className={titleCN} pose={pose}>
            Doming consetetur conclusionemque
            <br />
            vis ex, te duo odio accumsan.
          </div>
        ) : null}
        <InputContainer className={inputContainerCN} pose={pose}>
          <SearchInput theme={isExpanded ? "blue" : "dark"} />
        </InputContainer>
      </SearchContainer>
    )
  }
}
