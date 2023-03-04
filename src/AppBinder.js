import React from 'react'
import { AppBinderProvider } from './AppBinderContext'
import Assembler from './Assembler'

const AppBinder = () => {
  return (
    <AppBinderProvider>
      <Assembler />
    </AppBinderProvider>
  )
}

export default AppBinder
