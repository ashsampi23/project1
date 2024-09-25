
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'

function App() {
  const myroute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element ={<LayoutOne />}>
           <Route index element ={<Home />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={myroute} />
    </>
  )
}

export default App
