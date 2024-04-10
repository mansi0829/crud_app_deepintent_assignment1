import './App.css';
import CreateUser from './CreateUser';
import UserOperation from './UserOperation';

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <CreateUser/>
      <UserOperation/>
    </div>
  );
}

export default App;
