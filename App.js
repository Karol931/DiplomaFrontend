import React from 'react';

// components
import { AuthProvider } from './src/context/AuthContext'
import AppNav from './src/navigation/AppNav';
import { AppProvider } from './src/context/AppContext';
import usePushNotifications from './usePushNotifications';


const App = () => {

  // const { expoPushToken } = usePushNotifications();

  return (
    <AuthProvider>
      <AppProvider>
        <AppNav />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;