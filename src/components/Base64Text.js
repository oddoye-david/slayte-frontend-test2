import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from './BaseComponent';

class Base64Text extends BaseComponent {

  state = {
    text: '',
    isLoading: true,
  }

  async componentDidMount() {
    const data = await this.fetchData(this.props.url, true);
    this.setState({
      text: window.btoa(data),
      isLoading: false,
    });
  }

  async componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.setState({
        isLoading: true,
      });
      const data = await this.fetchData(nextProps.url, true);
      this.setState({
        text: window.btoa(data),
        isLoading: false,
      });
    }
  }


  render() {
    return (
      <div>
        <h4>Base64</h4>
        <div>
          {
            this.state.isLoading
              ? <div className="spinner"></div>
              : <pre className="code">{this.state.text}</pre>
          }
        </div>
      </div>
    )
  }
}

Base64Text.propTypes = {
  url: PropTypes.string,
}

export default Base64Text;