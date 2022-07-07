import PropTypes from 'prop-types';
import './style.css';

export const Transactions = ({ items }) => {
  const transactionsHistory = items.map(e => {
    // console.log(parseFloat(e.amount));
    return (
      <tr key={e.id}>
        <th>{e.type.charAt(0).toUpperCase() + e.type.slice(1)}</th>
        <th>{e.amount}</th>
        <th>{e.currency}</th>
      </tr>
    );
  });

  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionsHistory}</tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
