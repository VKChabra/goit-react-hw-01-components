// import PropTypes from 'prop-types';
import './style.css';

export const Friends = ({ friends }) => {
  const friendsList = friends.map(e => {
    const checkIfOnline = e => (e.isOnline === true ? 'online' : 'offline');
    return (
      <li className="item" key={e.id}>
        <span className={`status ${checkIfOnline(e)}`}></span>
        <img className="avatar" src={e.avatar} alt="User avatar" width="48" />
        <p className="name">{e.name}</p>
      </li>
    );
  });

  return <ul className="friend-list">{friendsList}</ul>;
};

// Friends.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };

export default Friends;
