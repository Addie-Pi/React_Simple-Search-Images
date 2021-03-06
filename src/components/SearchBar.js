import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  //   onInputCahnge(e) {
  //     console.log(e.target.value)
  //   }

  onFormSubmit = (e) => {
    e.preventDefault()

    this.props.submit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
