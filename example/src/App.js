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
