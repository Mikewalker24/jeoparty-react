const getRandomCategory = arr => arr[Math.floor(Math.random() * arr.length)];

const getClues = id => {
  return fetch(`http://jservice.io/api/clues?category=${id}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const clues = [...this.state.clues, data];
      this.setState({ clues });
    });
};

export const getCategories = () => {
  fetch("http://jservice.io/api/categories?count=100")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const categories = [];
      for (let i of Array(6).keys()) {
        const random = getRandomCategory(data);
        categories.push(random);
      }
      console.log(this);
      this.setState({ categories });

      for (const i of this.state.categories) {
        this.getClues(i.id);
      }
    });
};
