/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Song from './pages/Song';
import About from './pages/About';
import Charts from './pages/Charts';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Searched from './pages/Searched';
import Account from './pages/Account';
import Notfound from './pages/Notfound';
import Settings from './pages/Settings'
import Searchedloader from './Loaders/Searchedloader';
import Landing from './pages/Landing'

function App() {

  return (
    <div className='App flex-col flex justify-between'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/404/notfound' element={<Notfound />}></Route>
          <Route path='/song/:id' element={<Song />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/charts' element={<Charts />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/account' element={<Account />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/loader' element={<Searchedloader />}></Route>
          <Route path='/search/song/:input' element={<Searched />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          {/* <Route path='/artist/' element={<Settings />}></Route> */}
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
      <div className='mt-10'>
        &copy;mTunes by Precieux. All rights reserved 2022
      </div>
    </div>
  );
}

export default App;