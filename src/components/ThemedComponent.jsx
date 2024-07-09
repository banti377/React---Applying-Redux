import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000'
    },
    dark: {
      backgroundColor: '#000000',
      color: '#ffffff'
    }
  };

  return (
    <div style={themeStyles[theme]}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
