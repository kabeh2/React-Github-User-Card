import React, { Component } from "react";
import http from "./services/httpServices";
import { ToastContainer, toast } from "react-toastify";
import GitHubCalendar from "react-github-calendar";
import config from "./config.json";
import UserProfile from "./components/user_profile/UserProfile";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      followers: [],
      searchQuery: "",
      userParam: "kabeh2",
      apiUrl: config.apiUrl
    };
  }

  componentDidMount = () => {
    this.handleApiSubmit();
  };

  fetchUser = async () => {
    try {
      const response = await http.get(this.state.apiUrl);
      const user = response.data;
      this.setState({
        user,
        userParam: user.login
      });
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error("This user does not exist.");
      console.error("Error Retrieving User ", error);
      toast.error("Error Retrieving User ");
    }
  };

  fetchFollowers = async () => {
    try {
      const results = await http.get(`${this.state.apiUrl}/followers`);

      const followers = results.data;
      this.setState({
        followers
      });
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error("This users followers do not exist.");
      toast.error("Error Retrieving User");
      console.error("Error: ", error);
    }
  };

  handleChange = e => {
    const searchQuery = e.target.value;

    this.setState({
      searchQuery
    });
  };

  // Create callback function for Submitting Search form to call api
  handleApiSubmit = () => {
    this.setState({
      userParam: this.state.searchQuery
    });
    this.fetchUser();
    this.fetchFollowers();
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(
      {
        apiUrl: `https://api.github.com/users/${this.state.searchQuery}`,
        searchQuery: ""
      },
      // can place call back once state is updated
      // placed api callback to update search results
      this.handleApiSubmit
    );
    console.log(this.state.user.login);
  };

  render() {
    const { user, followers, searchQuery } = this.state;

    return (
      <>
        <ToastContainer />
        <Navbar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchQuery={searchQuery}
        />
        <div className="App">
          <header className="App-header">
            <UserProfile
              user={user}
              followers={followers}
              handleChange={this.handleChange}
            />

            <div className="calendar-container">
              <GitHubCalendar username={this.state.userParam} />
            </div>
          </header>
        </div>
      </>
    );
  }
}

export default App;
