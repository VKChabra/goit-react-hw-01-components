import './App.css';
import usersData from '../backend/Profile/user.json';
import statisticsData from '../backend/Statistics/data.json';
import friendsList from '../backend/Friends/friends.json';
import Profile from './Profile';
import Statistics from './Statistics';
import Friends from './Friends';

function App() {
  return (
    <section className="app-container">
      <Profile users={usersData} />
      <Statistics stats={statisticsData} title="Upload stats" />
      <Friends friends={friendsList} />
    </section>
  );
}

export default App;
