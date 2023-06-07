import './App.css';
import user from './user/user.json';
import friends from './friends/friends.json';
import { Profile } from './user/user.jsx';
import { Friends } from './friends/friends.jsx';

// const Welcome = ({ name, age, city }) => {
//   return (
//     <div>
//       <p>Hello, {name}</p>
//       <p>You have {age} years old</p>
//       <p>You live in {city}</p>
//     </div>
//   );
// };

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Friends friends={friends} />
    </div>
  );
};

export default App;
