import React, { Component } from 'react';
import logoBlack from './images/logo-black.svg';
import { css } from 'emotion'

const navbar = css`
  display: flex;
`;

const navigation = css`
display: flex;
`;

class Navbar extends Component {
  render() {
    return (
      <div className={navbar}>
        <img src={logoBlack} />
        <div className={navigation}>
          <div>Organisations</div>
          <div>Influencers</div>
          <div>Events</div>
          <div>Goals</div>
        </div>
        <button>Join</button>
        <div>[avatar]</div>
      </div>
    );
  }
}

export default Navbar;
