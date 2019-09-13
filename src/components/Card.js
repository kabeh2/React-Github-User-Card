import React, { useState } from "react";
import { Card, Icon, Image, Input } from "semantic-ui-react";

const UserCard = ({ user, followers }) => {
  const [query, setQuery] = useState("");

  const handleChange = e => {
    const inputQuery = e.target.value;

    setQuery(inputQuery);
  };

  let filteredList = followers.filter(item => {
    return item.login.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  return (
    <div className="card_container">
      <div className="card_profile">
        <h1>{`${user.name} Profile`}</h1>

        <Card>
          <Image src={user.avatar_url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{user.name}</Card.Header>

            <Card.Description>{user.bio}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <p>
                <Icon name="code" />
                {`${user.public_repos} Repos`}
              </p>
            </a>
          </Card.Content>
        </Card>
      </div>
      <div className="card_followers">
        <div className="card_followers--header">
          <h1>{`${user.name} Followers`}</h1>
          <Input
            icon="users"
            iconPosition="left"
            placeholder="Filter followers..."
            value={query}
            onChange={handleChange}
          />
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
    </div>
  );
};

export default UserCard;
