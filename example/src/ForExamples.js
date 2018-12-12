import React, { Component } from 'react'

export default class ForExamples extends Component {
  state = {
    input: '',
    emojis: [{
      img: '😸',
      label: 'smiling cat'
    }, {
      img: '🎉',
      label: 'tada'
    }, {
      img: '💩',
      label: 'poop'
    }]
  }

  inputChanged = ({ target: { value }}) => {
    this.setState({
      input: value
    })
  }

  addEmoji = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      input: '',
      emojis: [...prevState.emojis, {
        img: prevState.input,
        label: prevState.input
      }]
    }))
  }
  
  render() {
    const { emojis, input } = this.state
    return (
      <div>
        <For
          in={emojis}
          render={(emoji, key) => (
            <span key={key} role="img" aria-label={emoji.label}>{emoji.img}</span>
          )}
        />
        <br />
        <For in={emojis} reverse>
          {
            (emoji, key) => (
              <span key={key} role="img" aria-label={emoji.label}>{emoji.img}</span>
            )
          }
        </For>
        <form onSubmit={this.addEmoji}>
          <input value={input} onChange={this.inputChanged} />
          <button type="submit">Add Emoji</button>
        </form>
      </div>
    )
  }
}
