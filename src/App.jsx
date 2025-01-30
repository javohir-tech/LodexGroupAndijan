import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

// react bootstarp css
import 'bootstrap/dist/css/bootstrap.min.css';

//layout
import { MainLayout } from './Layout';

//pages
import {  Home } from './Pages';

function App() {
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
