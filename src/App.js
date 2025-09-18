import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Login from './Pages/Login';
import { AuthProvider } from './Pages/Context/AuthContext';
import SignUp from './Pages/SignUp';
import { Toaster } from 'react-hot-toast'
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ManageUsers from './Pages/Admin/ManageUsers';
import UserLayout from './Components/Layout/UserLayout';
import AdminLayout from './Components/Layout/AdminLayout';
import AddUsers from './Pages/Admin/AddUsers'
import AllProperty from './Pages/Admin/AllProperty';
import ManageAgents from './Pages/Admin/ManageAgents';
import AllOrders from './Pages/Admin/AllOrders';
import ViewProperty from './Pages/Admin/ViewProperty';
import AddListing from './Pages/AddListing/AddListing';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route element={<UserLayout/>}>
                <Route index path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>              
                <Route path='/about' element={<About/>}/>
                <Route path='/addlisting' element={<AddListing/>}/>
              </Route>
              

              <Route element={<AdminLayout/>}>
                <Route path='/admin' element={<AdminDashboard/>}/>
                <Route path='/admin/manage-users' element={<ManageUsers/>}/>
                <Route path='/admin/add-users' element={<AddUsers/>}/>
                <Route path='/admin/all-property' element={<AllProperty/>}/>
                <Route  path='/admin/all-property/view/:id' element={<ViewProperty/>}/>
                <Route path='/admin/manage-agents' element={<ManageAgents/>}/>
                <Route path='/admin/all-orders' element={<AllOrders/>}/>
                

              </Route>
            </Routes>
          <Toaster/>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
