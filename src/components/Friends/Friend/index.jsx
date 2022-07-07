import PropTypes from 'prop-types';
// import './style.css';

export const Friends = ({ friendsList }) => {
  return friendsList.map(({ id, isOnline, avatar, name }) => {
    return (
      <li className="item" key={id}>
        <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    );
  });
};

Friends.propTypes = {
  friendsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Friends;
