
import './App.css';
import Navbar from './components/navbar/Navbar';
import LaunchProduct from './components/launchProduct/LaunchProduct';
import Connect from './components/connctInside/Connect';

function App() {
  return (
    <div className="App">
      <Navbar />

      <LaunchProduct />
      <Connect />
    </div>
  );
}

export default App;
