import React, { Component } from 'react'
import { Fetch, For } from 'react-garden-tools'

export default class FetchExamples extends Component {
  render() {
    return (
      <div className="app">
        <Fetch
          url="https://www.reddit.com/r/Awww/.json"
          loading={() => <h1>Loading...</h1>}
          error={(error) => <h1>{error}</h1>}
        >
          {
            ({ json }) => (
              <For in={json.data.children}>
                {
                  ({ data }) => (
                    <a key={data.id} href={`https://www.reddit.com${data.permalink}`}>
                      <img alt={data.title} src={data.url}/>
                    </a>
                  )
                }
              </For>
            )
          }
        </Fetch>
      </div>
    )
  }
}
