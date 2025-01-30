import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

// react bootstarp css
import 'bootstrap/dist/css/bootstrap.min.css';

//layout
import { MainLayout } from './Layout';

//pages
import {  Home } from './Pages';

//AOS
import AOS from 'aos';

//react
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      offset: 200,       // Animatsiya boshlanish nuqtasi (pikselda)
      duration: 1000,    // Animatsiya davomiyligi (ms)
      easing: 'ease',    // Animatsiya tezligi (easing function)
      delay: 100,        // Animatsiya kechikishi (ms)
      once: false,       // Animatsiya faqat bir marta ishlashi
      mirror: false,     // Scroll ortga qaytganda animatsiya takrorlanishi
    });
  }, []);

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
