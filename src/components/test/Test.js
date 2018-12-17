import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: '',
    userId: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body,
          userId: data.userId
        })
      );
  }

  render() {
    const { title, body, userId } = this.state;

    return (
      <div>
        <h1 className='display-2'>{title}</h1>
        <p>{userId}</p>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
