import Friend from './Friend';
import styles from './friends.module.css';

export const Friends = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      <Friend friendsList={friends} />
    </ul>
  );
};

export default Friends;
