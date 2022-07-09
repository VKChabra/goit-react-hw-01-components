import usersData from 'backend/Profile/user.json';
import statisticsData from 'backend/Statistics/data.json';
import friendsList from 'backend/Friends/friends.json';
import transactionHistory from 'backend/Transactions/transactions.json';
import styles from 'components/App.module.css';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import Friends from 'components/Friends';
import Transactions from 'components/Transactions';

const App = () => {
  return (
    <section className={styles.appContainer}>
      <Profile users={usersData} />
      <Statistics stats={statisticsData} title="Upload stats" />
      <Friends friends={friendsList} />
      <Transactions items={transactionHistory} />
    </section>
  );
};

export default App;
