import Description from './Description';
import Stats from './Stats';
import styles from './profile.module.css';

export const Profile = ({ users }) => {
  return (
    <div className={styles.profile}>
      <Description users={users} />
      <Stats users={users} />
    </div>
  );
};

export default Profile;
