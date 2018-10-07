import React, { Component } from "react"
import Select, { components } from "react-select"
import { oneOf } from "prop-types"

import targetIcon from "./images/targetIcon.svg"
import searchIcon from "./images/searchIcon.svg"
import { search, textInput, select, Button } from "./styles"

const THEMES = ["blue", "dark"]

const places = [
  {
    value: "calgary",
    label: "Calgary, AB"
  },
  {
    value: "quebec",
    label: "Quebec"
  },
  {
    value: "goderich",
    label: "Goderich"
  }
]

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <img src={targetIcon} alt="target" />
      </components.DropdownIndicator>
    )
  )
}

export class SearchInput extends Component {
  static propTypes = {
    theme: oneOf(THEMES)
  }

  static defaultProps = {
    theme: THEMES[0]
  }

  render() {
    const { theme } = this.props

    return (
      <div className={search}>
        <input className={textInput} placeholder="Search for anything..." />
        <Select
          className={select}
          classNamePrefix={select}
          placeholder="Category"
        />
        <Select
          className={select}
          classNamePrefix={select}
          components={{ DropdownIndicator }}
          options={places}
          defaultValue={places[0]}
        />
        <Button theme={theme}>
          <img src={searchIcon} alt="search" />
        </Button>
      </div>
    )
  }
}
