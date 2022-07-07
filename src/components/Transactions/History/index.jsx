import PropTypes from 'prop-types';

export const History = ({ history }) => {
  return history.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <th>{type.charAt(0).toUpperCase() + type.slice(1)}</th>
        <th>{amount}</th>
        <th>{currency}</th>
      </tr>
    );
  });
};

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default History;
