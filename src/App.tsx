import AppBar from './components/AppBar/AppBar';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';
import Contacts from './containers/Contacts/Contacts';

function App() {

  return (
    <>
      <header>
        <AppBar />
      </header>
      <main className='container-fluid'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='about-us' element={<AboutUs />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<h1>Not found!</h1>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
