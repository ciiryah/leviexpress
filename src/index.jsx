import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './style.css';
import {Home} from "./components/Home";
import {Reservation} from "./components/Reservation";

export const API_BASE_URL = 'https://apps.kodim.cz/daweb/leviexpress/api';

const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/reservation/:id",
                    element: <Reservation />
                }
            ]
        },

    ]
);

createRoot(document.querySelector('#app')).render(
    <RouterProvider router={router} />
);
