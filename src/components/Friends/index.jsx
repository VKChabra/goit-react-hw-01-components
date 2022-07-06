// import PropTypes from 'prop-types';
import './style.css';

export const Friends = ({ friends }) => {
  const friendsList = friends.map(e => {
    // const checkOnline = (online) => {
    //     online === true ? return true : return false;
    // }
    return (
      <li className="item" key={e.id}>
        {/* <span className="status">{checkOnline(e.isOnline)}</span> */}
        <img className="avatar" src="" alt="User avatar" width="48" />
        <p className="name"></p>
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
