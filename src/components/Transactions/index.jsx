import History from './History';
import styles from './transactions.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
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
