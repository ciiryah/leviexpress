import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {createRoot} from "react-dom/client";

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>

);

