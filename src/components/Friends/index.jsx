import Friend from './Friend';
import PropTypes from 'prop-types';
import styles from './friends.module.css';

export const Friends = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <Friend key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
};

export default Friends;

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
