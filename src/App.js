import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddCustomerReview from './Pages/Dasboard/AddCustomerReview';
import Dasboard from './Pages/Dasboard/Dasboard';
import MyOrders from './Pages/Dasboard/MyOrders';
import MyProfile from './Pages/Dasboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import MyProtfolio from './Pages/MyProtfolio';
import Purchase from './Pages/Purchase';
import RequireAuth from './Pages/RequireAuth';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <div className='px-8'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/myprotfolio' element={
          <RequireAuth>
            <MyProtfolio></MyProtfolio>
          </RequireAuth>
        }></Route>
        <Route path='/dasboard' element={
          <RequireAuth>
            <Dasboard></Dasboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<AddCustomerReview></AddCustomerReview>}></Route>
          <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
export default App;
