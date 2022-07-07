import './App.css';
import usersData from 'backend/Profile/user.json';
import statisticsData from 'backend/Statistics/data.json';
import friendsList from 'backend/Friends/friends.json';
import transactionHistory from 'backend/Transactions/transactions.json';
import Profile from './Profile';
import Statistics from './Statistics';
import Friends from './Friends';
import Transactions from './Transactions';

const App = () => {
  return (
    <section className="app-container">
      <Profile users={usersData} />
      <Statistics stats={statisticsData} title="Upload stats" />
      <Friends friends={friendsList} />
      <Transactions items={transactionHistory} />
    </section>
  );
};

export default App;
