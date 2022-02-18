import React, { Component } from 'react';
import PropTypes from 'prop-types';

import generators from '../lib/generators';

export default class AddTask extends Component {
  constructor() {
    super();
    this.initialState = {
      id: 0,
      title: '',
      hasFinished: false,
    };

    this.state = this.initialState;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const { randomId } = generators;
    this.setState({
      id: randomId(99999999999),
      title: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onCreate } = this.props;
    const { id } = this.state;
    if (id > 0) {
      onCreate(this.state);
      this.setState(this.initialState);
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={title} onChange={this.handleInput} />
          <button type="submit">Adicionar Tarefa</button>
        </form>
      </div>
    );
  }
}

AddTask.propTypes = {
  onCreate: PropTypes.func,
}.isRequired;