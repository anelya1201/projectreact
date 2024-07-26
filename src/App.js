import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Footer from './footer';
import data from './data';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Main data={data}></Main>}></Route>
          <Route path='/profile' element={<Profile data={data.ProfilePage}></Profile>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
