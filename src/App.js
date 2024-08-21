import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import AppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Home />
    </div>
  );
}

export default App;
