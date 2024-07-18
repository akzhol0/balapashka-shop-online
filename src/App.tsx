import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/global.scss';
import HomePage from './components/home-page/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Catalog from './components/catalog/Catalog';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/catalog' element={<Catalog/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;