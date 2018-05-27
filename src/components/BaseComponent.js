import React, { Component } from 'react';

class BaseCompenent extends Component {
  async fetchData(url, asText) {
    const response = await fetch(url || 'https://jsonplaceholder.typicode.com/posts/1');
    const data = asText ? await response.text() : await response.json();

    return data;
  }
}

export default BaseCompenent;