import { Routes, Route } from 'react-router-dom';
import { ControlPanelLayout } from './layouts/ControlPainelLayout';
import { Companies } from './pages/control-panel/Companies';
import { Home } from './pages/blog/Home';
import { Users } from './pages/control-panel/Users';
import { Dashboard } from './pages/control-panel/Dashboard';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/control-panel' element={<ControlPanelLayout />}>
        <Route path='' element={<Dashboard />} />
        <Route path='users' element={<Users />} />
        <Route path='companies' element={<Companies />} />
      </Route>
    </Routes>
  );
}
