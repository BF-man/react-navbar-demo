import React, { Component } from "react"
import Select, { components } from "react-select"

import targetIcon from "./images/targetIcon.svg"
import searchIcon from "./images/searchIcon.svg"
import { search, textInput, select, button } from "./styles"

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

class SearchInput extends Component {
  render() {
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
        <div className={button}>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
    )
  }
}

export default SearchInput
