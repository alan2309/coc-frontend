import React, { createContext } from 'react';

export const AppBinderContext = createContext();

export const AppBinderProvider = (props) => {
  const name = {
    arr: ['Md'],
  }

  return (
    <AppBinderContext.Provider value={[name]}>
      {props.children}
    </AppBinderContext.Provider>
  )
}