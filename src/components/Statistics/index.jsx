import PropTypes from 'prop-types';
import './style.css';

export const Statistics = ({ stats, title }) => {
  const statisticsOutput = stats.map(e => {
    return (
      <li className="item" key={e.id}>
        <span className="label">{e.label}</span>
        <span className="percentage">{e.percentage}%</span>
      </li>
    );
  });

  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">{statisticsOutput}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
