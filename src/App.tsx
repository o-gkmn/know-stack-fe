import { Routes, Route, Outlet } from 'react-router-dom';
import { Home, About, Login, Register } from './pages';
import { MainLayout } from './layouts';

function LayoutWrapper() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
