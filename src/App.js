import React, { Component } from "react";
import axios from "axios";
import UserCard from "./components/Card";
// import { Input, Button } from "semantic-ui-react";
import "./App.scss";

const apiUrl = "https://api.github.com/users/inkent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      followers: [],
      searchQuery: "",
      userParam: "kabeh2",
      apiUrl: apiUrl
    };
  }

  componentDidMount = () => {
    this.fetchUser();
    this.fetchFollowers();
  };

  fetchUser = async () => {
    axios.get(this.state.apiUrl).then(response => {
      const user = response.data;
      this.setState({
        user
      });
      console.log(response.data);
    });
  };

  fetchFollowers = async () => {
    axios.get(`${this.state.apiUrl}/followers`).then(results => {
      console.log("asdf:", results.data);
      const followers = results.data;
      this.setState({
        followers
      });
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("PrevState", prevState);
  //   if (
  //     prevState.apiUrl !==
  //     `https://api.github.com/users/${this.state.searchQuery}`
  //   ) {
  //     this.setState({
  //       apiUrl: `https://api.github.com/users/${this.state.searchQuery}`
  //     });
  //    this.fetchUser();
  //    this.fetchFollowers();
  //   }
  // }

  handleChange = e => {
    const searchQuery = e.target.value;

    this.setState({
      searchQuery
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      // searchQuery: "",
      apiUrl: `https://api.github.com/users/${this.state.searchQuery}`
    });

    console.log(this.state.apiUrl, this.state.searchQuery);
  };

  render() {
    const { user, followers, searchQuery } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Search Users..."
              value={searchQuery}
              onChange={this.handleChange}
            />
            <button type="submit">Search</button>
          </form>

          <UserCard
            user={user}
            followers={followers}
            handleChange={this.handleChange}
          />
        </header>
      </div>
    );
  }
}

export default App;
