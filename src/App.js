import Profile from "./components/profile/profile";
 import user from './components/profile/user.json'
import StatisticsList from './components/statistics/statisticsList';
import statistickData from './components/statistics/statistical-data.json';
import friendsData from './components/frendlist/friends.json';
import FriendsList from './components/frendlist/friendsList';
import TransactionApp from './components/transaction/transactionApp';
import transactionData from './components/transaction/transactions.json';
function App(){
  return(
    <div>
  <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  followers={user.stats.followers}
  views={user.stats.views}
   likes={user.stats.likes}
 />
<StatisticsList items={statistickData}/>  
<FriendsList items={friendsData}/>
<TransactionApp transItems={transactionData}/>
</div>
  );
  
}
export default App;