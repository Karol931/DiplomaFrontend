import React from 'react';

// components
import { AuthProvider } from './src/context/AuthContext'
import AppNav from './src/navigation/AppNav';
import { AppProvider } from './src/context/AppContext';


export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppNav />
      </AppProvider>
    </AuthProvider>
  );
}
