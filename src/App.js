import './App.css';
import { Login } from './loginTask/Login';
import { Signup } from './loginTask/Signup';
import { HomeLS } from './loginTask/HomeLS';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/HomeLS' element={<HomeLS />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
