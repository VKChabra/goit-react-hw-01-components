import PropTypes from 'prop-types';
import styles from './stats.module.css';

export const Stats = ({ users }) => {
  const { stats } = users;
  return (
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>
          {stats.followers.toLocaleString('en-US')}
        </span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>
          {stats.views.toLocaleString('en-US')}
        </span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>
          {stats.likes.toLocaleString('en-US')}
        </span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  users: PropTypes.shape({
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

export default Stats;
