import React from "react";
import { Icon, Image, Header, Button } from "semantic-ui-react";

const UserProfileCard = ({ user }) => {
  return (
    <div className="card_profile">
      <div className="profile-container">
        <div className="profile_content--container">
          <div className="profile_img--container">
            <Image src={user.avatar_url} size="small" circular />
          </div>

          <div className="profile_info--container">
            <div className="profile_info--title">
              <Header as="h2" icon textAlign="left">
                <Header.Content>{user.login}</Header.Content>
              </Header>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <Button animated>
                  <Button.Content visible>Go to Profile</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </a>
            </div>
            <div className="profile_info--stats">
              <div className="profile-stats">
                <p>
                  {`${user.public_repos} `}{" "}
                  <span className="profile-stats--end">repos</span>
                </p>
              </div>
              <div className="profile-stats">
                <p>
                  {`${user.followers} `}{" "}
                  <span className="profile-stats--end">followers</span>
                </p>
              </div>
              <div className="profile-stats">
                <p>
                  {`${user.following} `}{" "}
                  <span className="profile-stats--end">following</span>
                </p>
              </div>
            </div>
            <div className="profile-bio">
              <p>{user.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
