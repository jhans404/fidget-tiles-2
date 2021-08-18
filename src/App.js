import React, {Component} from 'react';
import './App.css';
import TextInput from './Components/TextInput';
import DateInput from './Components/DateInput';

class App extends Component  {
  render() {
    return (
      <div className="container">
        <ul className="cards">
          <TextInput />
          <DateInput />
          <li className="NumberInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Number</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="number" className="textInput" />
                  </div>
                  <div className="output">
                    <label for="numberOutput">State: </label>
                    <span name="numberOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="ButtonInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Button</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="button" value="Click me!" className="btn"/>
                  </div>
                  <div className="output">
                    <label for="buttonOutput">State: </label>
                    <span name="buttonOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="RadioInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Radio</div>
                <p className="card-text">
                  <div className="input">
                    <input type="radio" name="radioInput" value="1" className="checkboxInput" />
                    <input type="radio" name="radioInput" value="2" className="checkboxInput" />
                    <input type="radio" name="radioInput" value="3" className="checkboxInput" />
                    <input type="radio" name="radioInput" value="4" className="checkboxInput" />
                    <input type="radio" name="radioInput" value="5" className="checkboxInput" />
                  </div>
                  <div className="output">
                    <label for="radioOutput">State: </label>
                    <span name="radioOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="ColorInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-image"></div>
                <div className="card-title">Color</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="color" className="colorButton"/>
                  </div>
                  <div className="output" >
                    <label for="colorOutput">State: </label>
                    <span name="colorOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="CheckboxInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Checkbox</div>
                <p className="card-text">
                  <div className="input">
                    <input type="checkbox" name="checkboxInput" value="1" className="checkboxInput" />
                    <input type="checkbox" name="checkboxInput" value="2" className="checkboxInput" />
                    <input type="checkbox" name="checkboxInput" value="3" className="checkboxInput" />
                    <input type="checkbox" name="checkboxInput" value="4" className="checkboxInput" />
                    <input type="checkbox" name="checkboxInput" value="5" className="checkboxInput" />
                  </div>
                  <div className="output">
                    <label for="checkboxOutput">Count: </label>
                    <span name="checkboxOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="RangeInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-image"></div>
                <div className="card-title">Range Slider</div>
                <p className="card-text">
                  <div className="input">
                    <input type="range" className="rangeInput" />
                  </div>
                  <div className="output">
                    <label for="rangeOutput">State: </label>
                    <span name="rangeOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="SelectInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-image"></div>
                <div className="card-title">Select</div>
                <p className="card-text">
                  <div className="input">
                    <select className="selectInput">
                      <option value="">Choose one:</option>
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Rabbit">Rabbit</option>
                      <option value="Fish">Fish</option>
                      <option value="Horse">Horse</option>
                    </select>
                  </div>
                  <div className="output">
                    <label for="selectOutput">Image: </label>
                    <span name="selectOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="UrlInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">URL</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="url" placeholder="Type a URL here!" className="textInput" />
                  </div>
                  <div className="output">
                    <label for="urlOutput">State: </label>
                    <span name="urlOutput"><a href="http://" id="url" target="_blank" rel="noopener noreferrer">&nbsp;</a></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
