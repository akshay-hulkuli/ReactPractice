import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import StatesDemo from './components/states/StatesDemo';
import PropsDemo from './components/props/PropsDemo';
import LifeCycle from './components/lifecycle/LifeCycle';
import Hooks from './components/hooks/Hooks';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path='/' element={<StatesDemo/>}/>
              <Route exact path='/props' element={<PropsDemo/>}/>
              <Route exact path='/lifecycle' element={<LifeCycle/>}/>
              <Route exact path='/hooks' element={<Hooks/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
