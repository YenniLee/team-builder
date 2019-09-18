import React, { useState } from 'react';
import Members from './components/Members';
import MemberForm from './components/MemberForm';

// import logo from './logo.svg';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  const addNewMember = member => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members members={members} />
      
    </div>
  );
}

export default App;



{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}