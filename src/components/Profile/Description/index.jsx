import PropTypes from 'prop-types';
import './style.css';

export const Description = ({ users }) => {
  const { username, tag, location, avatar } = users;
  return (
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

Description.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

export default Description;
