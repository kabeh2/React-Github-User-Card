import React from "react";
import { Input } from "semantic-ui-react";

const FilterFollowers = ({ query, handleChange }) => {
  return (
    <Input
      icon="users"
      iconPosition="left"
      placeholder="Filter followers..."
      value={query}
      onChange={handleChange}
    />
  );
};

export default FilterFollowers;
