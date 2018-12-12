import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Emoji extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    label: PropTypes.string
  }

  render() {
    const { children, label } = this.props
    return <span role='img' aria-label={label || 'emoji'}>{children}</span>
  }
}
