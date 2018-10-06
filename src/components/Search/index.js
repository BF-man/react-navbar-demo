import React, { Component } from 'react';
import { css } from 'emotion'
import background from "./images/background.jpg"
import SearchInput from './components/SearchInput';

const search = css`
  padding: 16.1rem 0 20.5rem 0;
  background-image: linear-gradient(rgba(67,67,67,0.15),rgba(67,67,67,0.15)), linear-gradient(rgba(255,255,255,0.60),rgba(255,255,255,0.60)), url(${background});
`

const title = css`
  color: #000000;
  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;
`

const inputContainer = css`
  & > * {
    margin: 0 auto;
  }
`;

class Search extends Component {
  render() {
    return (
      <div className={search}>
        <div className={title}>Doming consetetur conclusionemque<br/> vis ex, te duo odio accumsan.</div>
        <div className={inputContainer}>
          <SearchInput />
        </div>
      </div>
    );
  }
}

export default Search;
