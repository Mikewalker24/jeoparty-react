import React, { Component } from "react";
import classNames from "classnames";

export default class Clue extends Component {
  state = {
    isOpen: false,
    isOpening: false,
    alreadyOpened: false
  };

  openClue = () => {
    this.setState({
      isOpening: !this.state.isOpening
    });
    setTimeout(() => {
      this.setState({
        isOpening: !this.state.isOpening,
        isOpen: !this.state.isOpen
      });
    }, 300);
  };

  closeClue = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      alreadyOpened: !this.state.alreadyOpened
    });
  };

  handleClick = e => {
    const { isOpen, alreadyOpened } = this.state;

    if (!isOpen && !alreadyOpened) {
      this.openClue();
    } else if (isOpen) {
      this.closeClue();
    }
  };

  render() {
    const { value, clue } = this.props;

    const clueClasses = {
      clue: true,
      open: this.state.isOpen,
      opening: this.state.isOpening,
      closing: this.state.isClosing,
      disabled: this.state.alreadyOpened
    };

    return (
      <div className="clue-container">
        <div className={classNames(clueClasses)} onClick={this.handleClick}>
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
