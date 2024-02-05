import AppBar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';
import Contacts from './containers/Contacts/Contacts';
import Portfolio from './containers/Portfolio/Portfolio';
import FindBlockGame from './containers/Portfolio/FindBlockGame/FindBlockGame';
import Burger from './containers/Portfolio/Burger/Burger';
import Pocker from './containers/Portfolio/Pocker/Pocker';

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
            <Route path='pocker' element={<Pocker />} />
          </Route>
          <Route path='*' element={<h1>Not found!</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
