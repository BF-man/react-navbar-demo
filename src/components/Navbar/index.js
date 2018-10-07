import React, { Component } from "react"

import { Button } from "../Button"
import { Link } from "./components/Link"
import logoBlack from "./images/logo-black.png"
import avatarImage from "./images/avatar.png"
import { navigation, navbar, avatar } from "./styles"
export class Navbar extends Component {
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
        <Button>Join</Button>
        <img className={avatar} src={avatarImage} alt="avatar" />
      </div>
    )
  }
}
