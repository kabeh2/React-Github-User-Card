import React from "react";
import { Input, Icon, Header } from "semantic-ui-react";

const Navbar = ({ handleSubmit, handleChange, searchQuery }) => {
  return (
    <div className="nav-container">
      <div className="nav_content--container">
        <div className="nav_title">
          <Icon name="github" size="big" />
          <Header as="h1">React Github User Search</Header>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Search Other Users..."
            value={searchQuery}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
