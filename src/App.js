import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Login from './Pages/Login';
import { AuthProvider } from './Pages/Context/AuthContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          <Footer/>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
