import React, { Component } from "react"
import { bool } from "prop-types"

import { SearchInput } from "./components/SearchInput"
import { SearchContainer } from "./animations"
import {
  titleCN,
  ChangeLocationButton,
  InputContainer,
  searchContainerCN
} from "./styles"

export class Search extends Component {
  static propTypes = {
    isExpanded: bool.isRequired
  }

  render() {
    const { isExpanded } = this.props
    const pose = isExpanded ? "expanded" : "collapsed"
    return (
      <SearchContainer className={searchContainerCN} pose={pose}>
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
      </SearchContainer>
    )
  }
}
