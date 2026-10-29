import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";

import './scss/App.scss';
import Header from './Header.tsx';

import View from './View.tsx';
import DetailSalarie from './DetailSalarie.tsx'

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    ),
    children: [
      {
        path: "/",
        element: <View />,
      },
      {
        path: "/salarie",
        element: <DetailSalarie />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);