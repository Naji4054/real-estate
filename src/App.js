import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Login from './Pages/Login';
import { AuthProvider } from './Pages/Context/AuthContext';
import SignUp from './Pages/SignUp';
import { Toaster } from 'react-hot-toast'
import AdminDashboard from './Pages/Admin/AdminDashboard';
import MainHeader from './Components/Layout/Header/MainHeader';
import MainFooter from './Components/Layout/Footer/MainFooter';
import ManageUsers from './Pages/Admin/ManageUsers';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <MainHeader/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/admin' element={<AdminDashboard/>}/>
              <Route path='/admin/users' element={<ManageUsers/>}/>
            </Routes>
          <MainFooter/>
          <Toaster/>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
