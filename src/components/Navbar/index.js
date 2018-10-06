import React, { Component } from 'react';
import logoBlack from './images/logo-black.png';
import { css } from 'emotion'

const navbar = css`
  display: flex;
  max-width: 113.3rem;
  margin: 0 auto;
  align-items: center;
  height: 4.5rem;
`;

const navigation = css`
  display: flex;
  margin: 0 auto 0 7.8rem;
`;

const navItem = css`
  margin-right: 4.4rem;
  font-weight: 700;
`;

class Navbar extends Component {
  render() {
    return (
      <div className={navbar}>
        <img src={logoBlack} alt="WayBase" />
        <div className={navigation}>
          <div className={navItem}>Organisations</div>
          <div className={navItem}>Influencers</div>
          <div className={navItem}>Events</div>
          <div className={navItem}>Goals</div>
        </div>
        <button>Join</button>
        <div>[avatar]</div>
      </div>
    );
  }
}

export default Navbar;
