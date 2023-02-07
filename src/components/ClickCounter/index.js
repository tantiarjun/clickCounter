import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">
            The Button has been clicked{' '}
            <span className="countElement">{count}</span> times
          </h1>
          <p className="para">click the button to increase the count</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
