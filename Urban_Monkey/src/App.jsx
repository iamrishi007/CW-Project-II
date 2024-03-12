import Home from './Home'
import AllProducts from './AllProducts';


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignUp } from './SignUp';
import Login from './LogIn';
function App() {

  let allRoute = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },

    {
      path: "/allproducts",
      element: <AllProducts />,
    },

  ]);

  return (
    <>
      <RouterProvider router={allRoute} />
    </>
  )
}

export default App
