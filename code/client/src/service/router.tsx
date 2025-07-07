
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomepageTodo from '../pages/homepageTodo';
import Login from '../pages/connexion/login';
import Register from '../pages/connexion/register';



const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomepageTodo />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter;