# React Garden Tools

> React tools for your code garden. Coded live on Coding Garden with CJ: https://www.youtube.com/watch?v=RohbA3k_muU

[![NPM](https://img.shields.io/npm/v/react-garden-tools.svg)](https://www.npmjs.com/package/react-garden-tools) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-garden-tools
# or
yarn add react-garden-tools
```

## Usage

See more examples on github.

```jsx
import React from 'react'

import { State, If, Fetch, For } from 'react-garden-tools'

const App = () => (
  <State
    state={{
      searchTerm: '',
      url: null
    }}
    methods={{
     searchTermChanged: (setState, { target: { value } }) => {
       setState({
         searchTerm: value
       })
     },
     setUrl: (setState, event) => {
       event.preventDefault()
       setState(({ searchTerm }) => ({
         url: `https://www.reddit.com/r/EarthPorn/search.json?q=${searchTerm}&restrict_sr=on&sort=relevance&t=all`
       }))
     }
    }}
    render={({ state, methods }) => (
      <section>
       <form onSubmit={methods.setUrl}>
         <input
           value={state.searchTerm || ''}
           onChange={methods.searchTermChanged || (() => {})}
         />
         <button type="submit">Search</button>
       </form>
       <If
         condition={state.url}
         then={() => (
           <div className="images">
             <Fetch
               url={state.url}
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
         )}
       />
      </section>
    )}
  /> 
)

export default App;
```

## License

MIT © [w3cj](https://github.com/w3cj)
