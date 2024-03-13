// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home'
import { Login } from './components/signinsignup/Login'
import {Signin} from './components/signinsignup/Signin'
import {Songs} from './components/addsongs/Songs'
import { Admin } from './components/admin/Admin';
import { AddSong } from './components/addsongs/AddSong';
import { User } from './components/user/User'
import { Dashboard } from './components/Dashboard';
// import { Example } from '..src/components/Example'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/DataPrint' element={<DataPrint />} /> */}
          {/* <Route path="/" element={<Counter />} /> */}
          {/* <Route path="/From" element={<Form />} /> */}
          <Route path='/' element={<Login />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/admin/:username' element={<Admin />} />
          <Route path='/admin/addsongs' element={<AddSong />} />
          <Route path='/user' element={<User />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* <Route path='/example' element={<Example />} /> */}
          {/* <Route path='/HomeLS' element={<HomeLS />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
