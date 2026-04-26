import React from 'react'
import FaceExpression from './features/expression/components/FaceExpression'
import { RouterProvider } from "react-router"
import { AppRouter } from './app.routes'
import "./features/shared/global.scss"
import "./features/shared/button.scss"


const App = () => {
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  )
}

export default App
