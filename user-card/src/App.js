import React from "react";
import axios from "axios";

// import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.userData();
  }

  userData = () => {
    axios
      .get(`https://api.github.com/users/jazz-code`)
      .then(res => res.data)
      .then(users => this.setState({ user: users }));
  };

  render() {
    console.log("users", this.state);
    return (
      <div className="App">
        <header className="App-header">
          <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        </header>
      </div>
    );
  }
}
export default App;
