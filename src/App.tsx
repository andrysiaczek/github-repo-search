import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />, TODO:
  },
  {
    path: "/user/:username",
    element: <UserPage />,
    // errorElement: <ErrorPage />, TODO:
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
