import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Fetch extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    loading: PropTypes.func,
    error: PropTypes.func,
    render: PropTypes.func,
    children: PropTypes.func
  }

  state = {
    error: '',
    loading: true,
    json: null,
    headers: null
  };

  componentDidMount = () => {
    this.request()
  }

  componentDidUpdate = (prevProps) => {
    const {
      url: oldUrl
    } = prevProps
    const {
      url: newUrl
    } = this.props

    if (oldUrl != newUrl) {
      this.request()
    }
  }

  request = async () => {
    const { url } = this.props
    try {
      this.setState({
        loading: true
      })
      const response = await fetch(url)
      const json = await response.json()
      this.setState({
        loading: false,
        json,
        headers: response.headers
      })
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
        json: null,
        headers: null
      })
    }
  }

  render() {
    const {
      loading: loadingFn,
      error: errorFn,
      render: renderFn,
      children
    } = this.props
    const { error, loading, json, headers } = this.state

    if (loading) {
      return (loadingFn && loadingFn()) || null
    } else if (!error) {
      const fn = children || renderFn
      return (fn && fn({ json, headers })) || null
    } else {
      return (errorFn && errorFn(error)) || null
    }
  }
}
