import React, { Component } from "react"
import { Route } from "react-router-dom"

import Blank from "./pages/Blank"
import { Layout } from "./components/Layout"

class App extends Component {
  render() {
    return (
      <Layout>
        <Route component={Blank} />
      </Layout>
    )
  }
}

export default App
