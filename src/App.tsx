import AppBar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';
import Contacts from './containers/Contacts/Contacts';
import Portfolio from './containers/Profile/Portfolio';
import FindBlockGame from './containers/Profile/FindBlockGame/FindBlockGame';
import Burger from './containers/Profile/Burger/Burger';

function App() {

  return (
    <>
      <header>
        <AppBar />
      </header>
      <main className='container-fluid'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/portfolio' element={<Portfolio />} >
            <Route path='find-block-game' element={<FindBlockGame />} />
            <Route path='burger' element={<Burger />} />
          </Route>
          <Route path='*' element={<h1>Not found!</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
