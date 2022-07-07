import Friend from './Friend';
import './style.css';

export const Friends = ({ friends }) => {
  return (
    <ul className="friend-list">
      <Friend friendsList={friends} />
    </ul>
  );
};

export default Friends;
