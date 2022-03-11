import React from "react";
import { CardList } from "./components/card-list/card-list";
import "./App.css";

class App extends React.Component {
  state = {
    monsters: [],
    searchField: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App ">
        <h1 className="h1">Robots Rolodex</h1>
        <input
          className="pa3 mb4 mt2"
          type="search"
          placeholder="Search mosters.."
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
