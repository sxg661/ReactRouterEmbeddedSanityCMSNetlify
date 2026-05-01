import './App.css'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homePage'
import AboutMePage from './pages/aboutMePage'
import Layout from './layout'
import StudioRoute from "./studioRoute";

const router = createBrowserRouter([
  {
    path: "/studio",
    element: StudioRoute(),
  },
  {
    path: "/studio/*",
    action: () => {
      return redirect("/studio")
    }
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutMePage />,
      },
      {
        path: "*",
        element: <h1>ERROR PAGE NOT FOUND</h1>
      },
    ],
    errorElement: <h1>ERROR 404</h1>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
