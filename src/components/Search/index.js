import React, { Component } from "react"
import { css } from "emotion"

import background from "./images/background.jpg"
import SearchInput from "./components/SearchInput"
import { colors } from "../../variables"

const search = css`
  padding: 16.1rem 0 20.5rem 0;
  background-image: linear-gradient(${colors.gray2}, ${colors.gray2}),
    linear-gradient(${colors.gray3}, ${colors.gray3}), url(${background});
`

const title = css`
  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;
`

const inputContainer = css`
  & > * {
    margin: 5.1rem auto 0;
  }
`

class Search extends Component {
  render() {
    return (
      <div className={search}>
        <div className={title}>
          Doming consetetur conclusionemque
          <br />
          vis ex, te duo odio accumsan.
        </div>
        <div className={inputContainer}>
          <SearchInput />
        </div>
      </div>
    )
  }
}

export default Search
