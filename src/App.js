import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StatesDemo from './components/states/StatesDemo';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path='/' element={<StatesDemo/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
