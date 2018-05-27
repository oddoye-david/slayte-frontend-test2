import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from './BaseComponent';

class StringifiedText extends BaseComponent {

  state = {
    text: '',
    isLoading: true,
  }

  async componentDidMount() {
    const data = await this.fetchData(this.props.url, false);
    this.setState({
      text: JSON.stringify(data, null, this.props.depth),
      isLoading: false,
    });
  }

  async componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url && !!nextProps.url) {
      this.setState({
        isLoading: true,
      });
      const data = await this.fetchData(nextProps.url, false);
      this.setState({
        text: JSON.stringify(data, null, nextProps.depth),
        isLoading: false,
      });
    } else if (this.props.depth !== nextProps.depth) {
      this.setState((state, props) => {
        return {
          text: JSON.stringify(JSON.parse(state.text), null, nextProps.depth),
          isLoading: false,
        }
      })
    }
  }

  render() {
    return (
      <div>
        <h4>Stringified</h4>
        <div>
          {
            this.state.isLoading
              ? <div className="spinner"></div>
              : <pre
                className="code"
                data-lang="json">
                {this.state.text}
              </pre>
          }
        </div>
      </div>
    )
  }
}

StringifiedText.propTypes = {
  url: PropTypes.string,
  depth: PropTypes.number,
}

export default StringifiedText;