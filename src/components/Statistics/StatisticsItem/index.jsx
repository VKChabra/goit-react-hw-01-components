import PropTypes from 'prop-types';
import './style.css';

export const StatisticsItem = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => {
    return (
      <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
  });
};

StatisticsItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsItem;
