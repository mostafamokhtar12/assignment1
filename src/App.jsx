import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/Notfound/NotFound'
import Home from './Components/Home/Home'

export default function App() {

  
  let routes = createBrowserRouter([
    {path:"",element:<LayOut></LayOut>,children:[
      {path:"",element:<Home></Home>},
      {path:"about",element: <About></About>},
      {path:"portfolio",element:<Portfolio></Portfolio>},
      {path:"contact",element:<Contact></Contact>},
      {path:"*",element:<NotFound></NotFound>}
    ]}
  ])


  return <RouterProvider router={routes}></RouterProvider>
}
