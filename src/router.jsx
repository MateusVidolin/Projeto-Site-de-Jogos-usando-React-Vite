import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import GenreSelection from './components/GenreSelection';
import GenreList from './components/GenreList';
import ProtectedRoute from './components/ProtectedRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/genre-selection" 
          element={
            <ProtectedRoute>
              <GenreSelection />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/genres/:genre" 
          element={
            <ProtectedRoute>
              <GenreList />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
