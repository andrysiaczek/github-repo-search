import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Home from "./pages/Home/Home";
import UserPage from "./pages/UserPage/UserPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/user/:username",
    element: <UserPage />,
    errorElement: <ErrorBoundary />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
