import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [newUsername, setNewUserName] = useState("");

  return (
    <div className="App">
      <div className='addUser'>
        <input type='text' placeholder='Name...' onChange={(event) => setName(event.target.value)} />
        <input type='text' placeholder='Username...' onChange={(event) => setUserName(event.target.value)} />
        <button
          onClick={() => {
            dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username }));
          }}>
          Add User
        </button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input type='text' placeholder='New Username...' onChange={(event) => setNewUserName(event.target.value)} />
            <button
              onClick={() => {
                dispatch(updateUsername({ id: user.id, username: newUsername }));
              }}>
              Update Username
            </button>
            <button
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}>
              Delete Username
            </button>
          </div>
        })}
      </div>
    </div >
  );
}

export default App;
