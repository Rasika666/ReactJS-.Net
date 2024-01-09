import logo from './logo.svg';
import './App.css';

import { Home } from './pages/Home';
import { Department } from './pages/Department';
import { Employee } from './pages/Employee';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
      <div className="App container">
        <h3 className='d-flex justify-content-center m-3'>
          Company Name
        </h3>

        <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
            <ul className='navbar-nav'>
              <li className='nav-item m-1'>
                <NavLink className="btn btn-light btn-outline-primary" to="/home">
                  Home
                </NavLink>
              </li>
              <li className='nav-item m-1'>
                <NavLink className="btn btn-light btn-outline-primary" to="/department">
                  Department
                </NavLink>
              </li>
              <li className='nav-item m-1'>
                <NavLink className="btn btn-light btn-outline-primary" to="/employee">
                  Employee
                </NavLink>
              </li>
            </ul>
        </nav>

        <Routes>
          <Route path='/home' Component={Home}></Route>
          <Route path='/department' Component={Department}></Route>
          <Route path='/employee' Component={Employee}></Route>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;