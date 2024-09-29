import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import "./i18n"; 


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "*",
          element: <About />,
        },
      ],
    },
  ]);
  
  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
