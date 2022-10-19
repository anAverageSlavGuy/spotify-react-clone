import Sidebar from './Sidebar.js';
import Home from './Home.js';
import Player from './Player.js';
import './App.css';

function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <Home />
      </div>
      <Player />
    </>
  );
}

export default App;
