import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import NewsContainer from './components/News/NewsContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>

          <Routes>
            <Route path='/' element ={<div/>} />
            <Route path='/dialogs/*' element ={<DialogsContainer />} />
            <Route path='/profile/*' element ={<Profile />} />
            <Route path='/news/*' element ={<NewsContainer />} />
            <Route path='/music/*' element ={<Music />} />
            <Route path='/settings/*' element ={<Settings />} />

            <Route path='/users/*' element ={<UsersContainer />} />

          </Routes>


        </div>
      </div>
    </BrowserRouter>

  );
}





export default App;
