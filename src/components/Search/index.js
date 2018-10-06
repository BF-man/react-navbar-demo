import React, { Component } from 'react';
import { css } from 'emotion'
import background from "./images/background.jpg"

const search = css`
  background-image: url(${background});
`

class Search extends Component {
  render() {
    return (
      <div className={search}>
        <h1>Doming consetetur conclusionemque vis ex, te duo odio accumsan.</h1>
        <div>
          <input placeholder="search for anything..." />
          <select><option>Category</option></select>
          <select><option>Category, AB [ICON]</option></select>
          <button>[search icon]</button>
        </div>
        <div>Change Location</div>
        <button>Join</button>
        <div>[avatar]</div>
      </div>
    );
  }
}

export default Search;
