// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputLength: 0,
  }

  onChangeInputLength = event => {
    this.setState({inputLength: event.target.value.length})
  }

  render() {
    const {inputLength} = this.state

    return (
      <div className="app-container">
        <div className="details-container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="description" htmlFor="search">
              Enter the phrase
            </label>
            <input
              id="search"
              type="text"
              className="search-bar"
              onChange={this.onChangeInputLength}
            />
          </div>
          <div>
            <p className="count-style">No.of letters: {inputLength}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
