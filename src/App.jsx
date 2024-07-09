import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemedComponent from './components/ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
