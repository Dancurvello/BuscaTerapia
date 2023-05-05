
import Home from './pages/Home';
import './App.css';
import Favorites from './pages/Favorites';
import MyAccount from './pages/MyAccount';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/MyAccount",
    element: <MyAccount/>,
  },
  {
    path: "/Favorites",
    element: <Favorites/>,
  }

])

function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App;
