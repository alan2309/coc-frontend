import React, { createContext } from 'react';

export const AppBinderContext = createContext();

export const AppBinderProvider = (props) => {
  const themeColors = {
    freshBlue: '#5F9AC1',
    darkerBlue: '#647aa3',
    freshGreen: '#DDE37F',
    midGreen: '#a1af91',
    mehendiGreen: '#71744b',
    greyBlack: '#333333'
  }

  return (
    <AppBinderContext.Provider value={[themeColors]}>
      {props.children}
    </AppBinderContext.Provider>
  )
}