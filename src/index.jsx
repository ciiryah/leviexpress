import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './style.css';
import {Home} from "./components/Home";

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
                    path: "/reservation",
                    element: <h2>Detail jízdenky</h2>,
                }
            ]
        },

    ]
);

createRoot(document.querySelector('#app')).render(
    <RouterProvider router={router} />
);
