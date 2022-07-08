import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        <StatisticsItem stats={stats} />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
