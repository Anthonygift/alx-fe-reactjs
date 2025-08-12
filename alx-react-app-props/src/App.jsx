import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <UserInfo />
    </div>
  );
}
import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <div>
      <h2>User Information</h2>
      <UserDetails />
    </div>
  );
}
import Counter from './components/Counter';
function App() {
  return (
    <div>
      <h1>My React App with Props</h1>
      <Counter />
    </div>
  );
}
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}
import UserInfo from './UserInfo';

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}
import UserDetails from './UserDetails';

function UserInfo({ userData }) {
  return <UserDetails userData={userData} />;
}
function UserDetails({ userData }) {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
import UserContext from './UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = {
    name: 'Anthony Gift',
    email: 'anthonyomonago@gmail.com',
    role: 'Frontend Developer & Registered Nurse'
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <h1>Welcome to the Profile App</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}



import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <MainContent />
        <Footer />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <WelcomeMessage />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
