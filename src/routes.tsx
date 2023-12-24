import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/home/Home";
import InfoGame from "./pages/informacoes/InfoGame";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game/:id",
        element: <InfoGame/>
      }
    ]
  }
])