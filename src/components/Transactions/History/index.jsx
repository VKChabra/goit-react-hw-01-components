import PropTypes from 'prop-types';

export const History = ({ type, amount, currency }) => {
  return (
    <tr>
      <th>{type.charAt(0).toUpperCase() + type.slice(1)}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
};

History.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default History;
