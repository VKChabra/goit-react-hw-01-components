import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import './style.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        <StatisticsItem stats={stats} />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
