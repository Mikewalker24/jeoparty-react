import React, { Component } from "react";
import Gameboard from "./components/Gameboard";
import "./App.css";

class App extends Component {
  state = {
    categories: [],
    clues: [],
    values: [200, 400, 600, 800, 1000]
  };

  getRandomNumber = () => Math.floor(Math.random() * 10000);

  getRandomCategory = arr => arr[Math.floor(Math.random() * arr.length)];

  getClues = id => {
    return fetch(`http://jservice.io/api/clues?category=${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.length > 5) {
          data = data.slice(0, 5);
        }
        const clues = [...this.state.clues, data];
        clues.sort((a, b) => (a[0].category.id < b[0].category.id ? -1 : 1));
        this.setState({ clues });
      });
  };

  componentWillMount() {
    const random = this.getRandomNumber();

    fetch(`http://jservice.io/api/categories?count=6&offset=${random}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.sort((a, b) => (a.id < b.id ? -1 : 1));
        this.setState({ categories: data });
      })
      .then(() => {
        for (let category of this.state.categories) {
          this.getClues(category.id);
        }
      });
  }

  render() {
    const categories = this.state.categories;
    const clues = this.state.clues;
    const values = this.state.values;

    return (
      <div className="App">
        {clues.length > 5 ? (
          <Gameboard categories={categories} clues={clues} values={values} />
        ) : null}
      </div>
    );
  }
}

export default App;
