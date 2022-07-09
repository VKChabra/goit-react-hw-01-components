import PropTypes from 'prop-types';
import styles from './statisticsItem.module.css';

export const StatisticsItem = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => {
    return (
      <li className={styles.item} key={id}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
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
