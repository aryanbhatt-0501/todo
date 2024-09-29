import Dashboard from './views/dashboard';
import Navbar from './views/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body className='App-body'>
        <Dashboard />
      </body>
      <footer className='App-footer'>Footer</footer>
    </div>
  );
};

export default App;
