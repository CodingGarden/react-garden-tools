import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class If extends Component {
  static propTypes = {
    condition: PropTypes.any,
    then: PropTypes.func,
    else: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }

  render() {
    const {
      condition,
      then: thenFn,
      else: elseFn,
      children
    } = this.props

    if (children) {
      if (typeof children === 'function' && condition) {
        return children()
      } else if (typeof children === 'object') {
        if (condition) {
          return (children.then && children.then()) || null
        } else {
          return (children.else && children.else()) || null
        }
      } else {
        return null
      }
    } else if (condition) {
      return (thenFn && thenFn()) || null
    } else {
      return (elseFn && elseFn()) || null
    }
  }
}
