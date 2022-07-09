import Description from './Description';
import Stats from './Stats';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

export const Profile = ({ users }) => {
  const { username, tag, location, avatar, stats } = users;
  return (
    <div className={styles.profile}>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
