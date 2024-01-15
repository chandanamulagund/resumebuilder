
import './App.css';
import React from 'react';
import { Button, Space } from 'antd';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Templates from './pages/templates';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProtectRoute><Home/></ProtectRoute>}/>
      <Route path='/home' element={<ProtectRoute><Home/></ProtectRoute>}/>
      <Route path='/profile' element={<ProtectRoute><Profile/></ProtectRoute>}/>
      <Route path='/templates/:id' element={<ProtectRoute><Templates/></ProtectRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectRoute(props){

  if(localStorage.getItem('ResumeBuilder-users'))
  {
    return props.children;
  }
  else
  {
    return <Navigate to='/login'/>; //if you haven't registered / have an account, you can't access the home page
    // your details are supposed to be present in local storage
  }

}
