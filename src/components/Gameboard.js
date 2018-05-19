import React, { Component } from "react";
import Category from "./Category";
import Clue from "./Clue";

export default class Gameboard extends Component {
  render() {
    const values = this.props.values;

    return (
      <div className="gameboard">
        <div className="categories">
          {this.props.categories.map((category, i) => {
            return (
              <Category category={this.props.categories[i]} key={category.id} />
            );
          })}
        </div>
        <div className="clues">
          {this.props.clues.map((clues, i) => {
            return (
              <div className="clue-column" key={Date.now() + i}>
                {clues.map((clue, i) => {
                  return (
                    <Clue
                      clue={clue}
                      value={values[i]}
                      key={clue.id}
                      ref={el => (this.instance = el)}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
