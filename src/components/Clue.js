import React, { Component } from "react";
import classNames from "classnames";

export default class Clue extends Component {
  state = {
    isOpen: false,
    isOpening: false,
    isClosing: false
  };

  handleClick = e => {
    if (this.state.isOpen === false) {
      this.setState({
        isOpening: !this.state.isOpening
      });
      setTimeout(() => {
        this.setState({
          isOpening: !this.state.isOpening,
          isOpen: !this.state.isOpen
        });
      }, 300);
    } else {
      this.setState({
        isClosing: !this.state.isClosing,
        isOpen: !this.state.isOpen
      });
      setTimeout(() => {
        this.setState({
          isClosing: !this.state.isClosing
        });
      }, 300);
    }
  };

  render() {
    const { value, clue } = this.props;

    const clueClass = {
      clue: true,
      open: this.state.isOpen,
      opening: this.state.isOpening,
      closing: this.state.isClosing
    };

    return (
      <div className="clue-container">
        <div className={classNames(clueClass)} onClick={this.handleClick}>
          {this.state.isOpen ? (
            <div>
              <div className="clue-category">{clue.category.title}</div>
              <div className="clue-value">${value}</div>
              <div className="question">{clue.question} </div>
              <div className="answer">{clue.answer} </div>
            </div>
          ) : (
            <span className="value">${value}</span>
          )}
        </div>
      </div>
    );
  }
}
