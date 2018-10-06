import React, { Component } from "react"
import { css } from "emotion"

import { Link } from "./components/Link"
import logoBlack from "./images/logo-black.png"

const navbar = css`
  display: flex;
  max-width: 113.3rem;
  margin: 0 auto;
  align-items: center;
  height: 4.5rem;
`

const navigation = css`
  display: flex;
  margin: 0 auto 0 7.8rem;
  height: 100%;
`

class Navbar extends Component {
  render() {
    return (
      <div className={navbar}>
        <img src={logoBlack} alt="WayBase" />
        <div className={navigation}>
          <Link to="/organisations">Organisations</Link>
          <Link to="/influencers">Influencers</Link>
          <Link to="/events">Events</Link>
          <Link to="/goals">Goals</Link>
        </div>
        <button>Join</button>
        <div>[avatar]</div>
      </div>
    )
  }
}

export default Navbar
