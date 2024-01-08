import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Deparments from './department/Deparments';
import App from './App';
import AddDepartment from './department/AddDepartment';
import Employees from './employee/Employees';
import AddEmpoyee from './employee/AddEmpoyee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "departments",
    element: <Deparments />,
  },
  {
    path: "department/add",
    element: <AddDepartment />,
  },
  {
    path: "employees",
    element: <Employees />,
  },
  {
    path: "employee/add",
    element: <AddEmpoyee />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  
      <RouterProvider router={router} />
    

  </React.StrictMode>
);

