import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterConfirmPage from '../pages/RegisterConfirmPage';
import RegisterFormPage from '../pages/RegisterFormPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <PublicRoute>
          <HomePage />
        </PublicRoute>
      } />
      <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />
      <Route path="/register" element={
        <PublicRoute>
          <RegisterConfirmPage />
        </PublicRoute>
      } />
      <Route path="/register/form" element={
        <PublicRoute>
          <RegisterFormPage />
        </PublicRoute>
      } />
    </Routes>
  );
}