import logo from './img-avatar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/linh20111789"
          target="_blank"
          rel="noopener noreferrer"
        >
          My name is Nguyen Van Linh
        </a>
      </header>
    </div>
  );
}

export default App;
