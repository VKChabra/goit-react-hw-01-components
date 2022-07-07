import PropTypes from 'prop-types';
import './style.css';

export const Profile = ({ users }) => {
  const { username, tag, location, avatar, stats } = users;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">
            {stats.followers.toLocaleString('en-US')}
          </span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">
            {stats.views.toLocaleString('en-US')}
          </span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">
            {stats.likes.toLocaleString('en-US')}
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default Profile;