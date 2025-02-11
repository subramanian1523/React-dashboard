import { Route, Routes } from 'react-router-dom';
import { GlobalLayout } from '../Layouts';
import { ProtectedRoute } from './ProtectedRoute';
import { Dashboard, Login, MenuPages } from '../Pages';

const Protected = ({ children }) => (
  <ProtectedRoute>
    {children}
  </ProtectedRoute>
);

export const GlobalRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        
        <Route path="dashboard" element={<Protected><Dashboard /></Protected>} />
                {['Products', 'Sales-Order', 'Reviews'].map((item) => (
          <Route
            key={item}
            path={`${item}`}
            element={<Protected> <MenuPages /></Protected>}
          />
        ))}
      </Route>
    </Routes>
  );
};
