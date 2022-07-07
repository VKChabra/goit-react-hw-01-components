import History from './History';
import './style.css';

export const Transactions = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <History history={items} />
      </tbody>
    </table>
  );
};

export default Transactions;
