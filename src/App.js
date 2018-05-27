import React, { Component } from 'react';

import StringifiedText from './components/StringifiedText'
import Base64Text from './components/Base64Text'
import { isValidUrl } from './util'


import './milligram.min.css';
import './App.css';

class App extends Component {
  state = {
    validUrl: undefined,
    url: '',
    depth: 0,
    invalidUrl: false,
  }

  handleTextInputChange = ({ target }) => {
    return this.setState({ [target.name]: target.value });
  }

  handleNumberInputChange = ({ target }) => {
    this.setState({ [target.name]: Number(target.value) || 0 });
  }

  submitUrlForm = (event) => {
    event.preventDefault();
    console.log('here', this.state.url);
    if (isValidUrl(this.state.url)) {
      return this.setState({ validUrl: this.state.url, invalidUrl: false })
    }

    return this.setState({ invalidUrl: true })
  }

  render() {
    return (
      <div className="container">
        <div className="form-group row">
          <div className="column column-50">
            <form onSubmit={this.submitUrlForm}>
              <label className="form-label" htmlFor="url">Url</label>
              <input
                className={`form-input ${this.state.invalidUrl ? 'is-error' : ''}`}
                name="url"
                type="text"
                placeholder="Url"
                value={this.state.url}
                onChange={this.handleTextInputChange}
              />
              <button style={{ marginTop: '5px' }} type="submit" className="btn btn-primary">Fetch Data</button>
            </form>
          </div>
          <div className="column column-50">
            <label className="form-label" htmlFor="depth">Depth</label>
            <input
              className="form-input"
              name="depth"
              type="number"
              placeholder="Depth"
              value={this.state.depth}
              onChange={this.handleNumberInputChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="column column-50">
            <StringifiedText url={this.state.validUrl} depth={this.state.depth} />
          </div>
          <div className="column column-50">
            <Base64Text url={this.state.validUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
