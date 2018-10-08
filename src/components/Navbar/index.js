import React, { Component, Fragment } from "react"

import { Button } from "../Button"
import { Link } from "./components/Link"
import logoBlack from "./images/logo-black.png"
import avatarImage from "./images/avatar.png"
import { navigationCN, navbarCN, avatarCN, spacerCN } from "./styles"
export class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className={navbarCN}>
          <div>
            <img src={logoBlack} alt="WayBase" />
            <div className={navigationCN}>
              <Link to="/organisations">Organisations</Link>
              <Link to="/influencers">Influencers</Link>
              <Link to="/events">Events</Link>
              <Link to="/goals">Goals</Link>
            </div>
            <Button>Join</Button>
            <img className={avatarCN} src={avatarImage} alt="avatar" />
          </div>
        </div>
        <div className={spacerCN} />
      </Fragment>
    )
  }
}
