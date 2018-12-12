import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class State extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    methods: PropTypes.object,
    render: PropTypes.func
  }

  componentDidMount = () => {
    const { state, methods } = this.props
    this.methods = {}
    const setState = this.setState.bind(this)
    Object
      .keys(methods)
      .forEach(methodName => {
        this.methods[methodName] = (...args) => {
          methods[methodName](setState, ...args)
        }
      })
    this.setState(state)
  }

  render() {
    const { render: renderFn } = this.props
    return renderFn({
      state: this.state || {},
      methods: this.methods || {}
    })
  }
}
