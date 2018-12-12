import React, { Component } from 'react'
import { If } from 'react-garden-tools'

export default class IfExamples extends Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render () {
    const { show } = this.state;
    return (
      <div>
        {
          show ? <h1>Yay!! 🎉</h1> : <h1>Boooo! 💩</h1>
        }
        <If
          condition={show}
          then={() => (
            <h1>Yay!! 🎉</h1>
          )}
          else={() => (
            <h1>Booooo! 💩</h1>
          )}
        />
        <If condition={show}>
          {
            () => <h1>Yay again!!! 🎉</h1>
          }
        </If>
        <If condition={show}>
          {
            {
              then: () => <h1>Yay again!!! 🎉</h1>,
              else: () => <h1>Boooooo! 💩</h1>,
            }
          }
        </If>
        <If condition={show}>
          {
            {
              else: () => <h1>Boooooo! 💩</h1>,
            }
          }
        </If>
        <If condition={show}>
          {
            {
              then: () => <h1>Yay again!!! 🎉</h1>,
            }
          }
        </If>
        <button onClick={this.toggleShow}>Toggle Show</button>
      </div>
    )
  }
}
