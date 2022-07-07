import PropTypes from 'prop-types';
import './style.css';

export const Stats = ({ users }) => {
  const { stats } = users;
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">
          {stats.followers.toLocaleString('en-US')}
        </span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views.toLocaleString('en-US')}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes.toLocaleString('en-US')}</span>
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
