// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countLetters = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="page_container">
        <div className="content_container">
          <div className="details_container">
            <h1 className="heading">
              Calculate the <br />
              Letters you <br />
              enter
            </h1>
            <label for="input">Enter the phrase</label>
            <br />
            <input
              id="input"
              onChange={this.countLetters}
              type="input"
              className="input"
              placeholder="Enter the Phrase"
            />
            <p className="no_of_letters">No.of letters: {count}</p>
          </div>
          <div className="image_container">
            <img
              className="image"
              alt="letters calculator"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
