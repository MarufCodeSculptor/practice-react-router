import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorPage from './error-page';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Contact from './routes/contact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
