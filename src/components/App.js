import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (term) => {
    // console.log('term=> ', term)

    const reponse = await unsplash.get('/search/photos/', {
      params: { query: term },
    })

    this.setState({ images: reponse.data.results })
    // console.log('reponse.data.results=> ', reponse.data.results)
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar submit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App
