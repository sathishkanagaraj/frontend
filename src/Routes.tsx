import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {AddExperiment} from './pages/AddExperiment';
import { Dashboard } from './Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: 'addExperiment',
    element: <AddExperiment />
  }
])

export const Routes = () =>{
  return <RouterProvider router={router} />;
}