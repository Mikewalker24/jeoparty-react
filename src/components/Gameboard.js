import React, { Component } from "react";
import Category from "./Category";
import Clue from "./Clue";

export default class Gameboard extends Component {
  render() {
    const { clues, values, categories } = this.props;

    return (
      <div className="gameboard">
        <div className="categories">
          {categories.map((category, i) => {
            return <Category category={categories[i]} key={category.id} />;
          })}
        </div>
        <div className="clues">
          {clues.map((clues, i) => {
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
