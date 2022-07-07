import Description from './Description';
import Stats from './Stats';
import './style.css';

export const Profile = ({ users }) => {
  return (
    <div className="profile">
      <Description users={users} />
      <Stats users={users} />
    </div>
  );
};

export default Profile;
