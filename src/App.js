import Sidebar from './Sidebar.js';
import Home from './Home.js';
import Player from './Player.js';
import './App.css';

function App() {
  return (
    <>
      <div className="flex h-full lg:h-[calc(100vh-90px)]">
        <Sidebar />
        <Home />
      </div>
      <Player />
    </>
  );
}

export default App;
