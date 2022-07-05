import statistics from '../../backend/Statistics/data.json';
// import PropTypes from 'prop-types';
import './style.css';

export const Statistics = () => {
  const stats = statistics.map(e => {
    return (
      <div>
        <li className="item" key={e.id}>
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </div>
    );
  });

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">{stats}</ul>
    </section>
  );
};

// Statistics.propTypes = {
//   username: PropTypes.number,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
//   stats: PropTypes.shape({
//     followers: PropTypes.number,
//     views: PropTypes.number,
//     likes: PropTypes.number,
//   }),
// };

export default Statistics;
