import React, { Component } from "react"
import { Route } from "react-router-dom"

import Blank from "./pages/Blank"
import Navbar from "./components/Navbar"
import Search from "./components/Search"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Route component={Blank} />
      </div>
    )
  }
}

export default App
