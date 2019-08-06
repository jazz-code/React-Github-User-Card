import React from "react";
import UserData from "./components/UserData.js";
import axios from "axios";

// import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
      // login: login
    };
  }

  componentDidMount() {
    this.userData();
  }

  userData = () => {
    // let data = avatar_url;
    axios
      .get(`https://api.github.com/users/jazz-code`)
      .then(res => res.data)
      .then(res =>
        this.setState({
          user: res,
          login: res.login
        })
      );
  };

  render() {
    console.log("users", this.state.login);
    return (
      <div className="App">
        <header className="App-header" />
        <UserData name={this.state.login} />
      </div>
    );
  }
}
export default App;
