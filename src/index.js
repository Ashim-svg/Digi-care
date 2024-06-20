import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reg from './Component/register.js';
import Login from './Component/login.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appoint from './Component/appoint.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Reg />,
  },
  {
    path: "/login", // Corrected path for the login route
    element: <Login />,
  },
  {
    path: "/Appoint", // Corrected path for the login route
    element: <Appoint/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
