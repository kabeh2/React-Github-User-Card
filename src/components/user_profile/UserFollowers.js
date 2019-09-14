import React from "react";
import FilterFollowers from "./FilterFollowers";
import { Card, Icon, Image } from "semantic-ui-react";

const UserFollowers = ({ user, query, handleChange, followers }) => {
  let filteredList = followers.filter(item => {
    return item.login.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  return (
    <div className="card_followers">
      <div className="card_followers--header">
        <h1>{`${user.login} Followers`}</h1>
        <FilterFollowers query={query} handleChange={handleChange} />
      </div>

      <div className="card_followers--container">
        {/* FILTER SEARCH */}
        {filteredList.map(follower => (
          <Card key={follower.id}>
            <Image src={follower.avatar_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{follower.login}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a
                href={follower.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <Icon name="code" />
                  Go to Profile Page
                </p>
              </a>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserFollowers;
