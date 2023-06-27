
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameStart from './components/GameStart';
import styled from 'styled-components';
import FetchUsers from './components/FetchUsers';
// import { OnlineMode } from './components/OnlineMode';
// import { CreateUser } from './components/CreateUser.component';
// import { Options } from './components/Options';
// import { getChip, getChips } from './services/chips-api';
// import { getUser } from './services/users-api';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* debug for now game */}
            <Route path='/' element={<FetchUsers/>} />
            <Route path='/game' element={<GameStart/> } />
            {/* navbar comes after*/}
          </Routes>
        </Router>
      </header>
        </div>
    );
}

export default App;
