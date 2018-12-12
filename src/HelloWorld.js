import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HelloWorld extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name } = this.props
    return (
      <div>
        Hello {name}!
      </div>
    )
  }
}
