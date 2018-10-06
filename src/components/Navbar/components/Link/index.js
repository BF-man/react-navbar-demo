import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { css } from 'emotion'
import { colors } from '../../../../variables'

const active = css`
  &::after {
    display: block;
    content: "";
    height: 0.4rem;
    background-color: ${colors.blue};
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`

const link = css`
  margin-right: 4.4rem;
  font-weight: 700;
  text-decoration: none;
  color: ${colors.gray};
  height: 100%;
  display: inline-flex;
  align-items: center;
  position: relative;
`

export class Link extends Component {
  render() {
    return <NavLink activeClassName={active} className={link} {...this.props} />
  }
}
