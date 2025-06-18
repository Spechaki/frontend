// src/router/index.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterConfirmPage from '../pages/RegisterConfirmPage';
import RegisterFormPage from '../pages/RegisterFormPage';
import SearchPage from '../pages/SearchPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import HireServicePage from '../pages/HireServicePage';
import PaymentSuccessPage from '../pages/PaymentSuccessPage';
import PaymentCancelledPage from '../pages/PaymentCancelledPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import TrainerProfilePage from '../pages/TrainerProfilePage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Páginas públicas accesibles por todos */}
      <Route path="/" element={<HomePage />} />
      <Route path="/buscar" element={<SearchPage />} />
      <Route path="/servicios/:id" element={<ServiceDetailPage />} />

      <Route path="/pago/exito" element={<PaymentSuccessPage />} />
      <Route path="/pago/cancelado" element={<PaymentCancelledPage />} />

      {/* Solo para usuarios NO logueados */}
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

      {/* A futuro: protegidas */}
      {/* 
      <Route path="/perfil" element={
        <PrivateRoute>
          <ProfilePage />
        </PrivateRoute>
      } /> 
      */}

      <Route path="/entrenador/perfil/:id" element={
        <PrivateRoute>
          <TrainerProfilePage />
        </PrivateRoute>
      } />
      <Route path="/entrenador/perfil" element={
        <PrivateRoute>
          <TrainerProfilePage />
        </PrivateRoute>
      } />
      
       <Route
        path="/servicios/:id/contratar"
        element={
          <PrivateRoute>
            <HireServicePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
