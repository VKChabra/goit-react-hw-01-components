import PropTypes from 'prop-types';
import styles from './friend.module.css';

export const Friends = ({ friendsList }) => {
  return friendsList.map(({ id, isOnline, avatar, name }) => {
    return (
      <li className={styles.item} key={id}>
        <span
          className={`${styles.status} ${
            isOnline ? styles.online : styles.offline
          }`}
        ></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{name}</p>
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
