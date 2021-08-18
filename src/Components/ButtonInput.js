import React, {Component} from 'react';

class ButtonInput extends Component {
  // Add a constructor with a state
  constructor(props) {
    super(props);
    this.state = {
      button: null
    }
  };

  // The event will be passed in automatically.
  handleChange = (event) => {
    this.setState({"button": event.target.value});
  }

  // Add a render function which returns JSX
  render() {
    return(
      <li className="cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Date</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="date" className="textInput" onChange={this.handleChange}/>
              </div>
              <div className="output">
                <label for="dateOutput">State: </label>
                <span name="dateOutput">{this.state.date}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default ButtonInput;
