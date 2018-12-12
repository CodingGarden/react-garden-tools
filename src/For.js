import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class For extends Component {
  static propTypes = {
    in: PropTypes.array.isRequired,
    render: PropTypes.func,
    children: PropTypes.func,
    reverse: PropTypes.bool
  }

  render() {
    const { in: listProp, render: renderFn, children, reverse } = this.props

    let list = listProp
    if (reverse) {
      list = listProp.slice().reverse()
    }
    return list.map(renderFn || children || (() => {}))
  }
}
