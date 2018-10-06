import React, { Component } from "react"
import { css } from "emotion"

import { colors } from "../../../../variables"

const search = css`
  display: flex;
  flex-wrap: nowrap;
  width: 74.5rem;
  height: 5.4rem;
  background-color: ${colors.white};
  border-radius: 2px;

  & > * {
    border-radius: 2px;
    height: 100%;
    font-weight: 700;
  }
`

const textInput = css`
  flex: 1;
  border: none;
  padding: 1.4rem 2rem;

  &::placeholder {
    opacity: 0.5;
    color: ${colors.gray};
  }
`

const categoryInput = css`
  width: 16.4rem;
`

const placeInput = css`
  width: 16.4rem;
`

const button = css`
  width: 5.4rem;
  background-color: ${colors.blue};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

class SearchInput extends Component {
  render() {
    return (
      <div className={search}>
        <input className={textInput} placeholder="Search for anything..." />
        <select className={categoryInput}>
          <option>Category</option>
        </select>
        <select className={placeInput}>
          <option>Category, AB [ICON]</option>
        </select>
        <div className={button}>[search icon]</div>
      </div>
    )
  }
}

export default SearchInput
