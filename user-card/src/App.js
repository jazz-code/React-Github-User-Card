import React from "react";
import UserData from "./components/UserData.js";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      users: `jazz-code`
    };
  }

  componentDidMount() {
    this.userData();
    this.userFollowers();
    this.searchUsers();
  }

  userData = () => {
    // let data = avatar_url;
    axios
      .get(`https://api.github.com/users/jazz-code`)
      .then(res => res.data)
      .then(res =>
        this.setState({
          user: res,
          login: res.login,
          avatar: res.avatar_url
        })
      );
  };

  userFollowers = () => {
    // let data = avatar_url;
    axios
      .get(`https://api.github.com/users/divbyseptember/followers`)
      .then(res => res.data)
      .then(res =>
        this.setState({
          followers: res
        })
      );
  };

  searchUsers = () => {
    // let data = avatar_url;
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(res => res.data)
      .then(res =>
        this.setState({
          users: res
        })
      );
  };

  render() {
    console.log("USERS", this.state.users);
    return (
      <div className="App">
        <header className="App-header" />
        <UserData
          name={this.state.login}
          avatar={this.state.avatar}
          followers={this.state.followers}
        />
      </div>
    );
  }
}
export default App;
