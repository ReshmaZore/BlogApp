import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Homepage from './routes/Homepage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import Write from './routes/Write.jsx';
import LoginPage from './routes/LoginPage.jsx';
import Postlistpage from './routes/Postlistpage.jsx';
// import { ClerkProvider } from '@clerk/clerk-react';

// const PUBLISHABLE_KEY = "pk_test_aW5mb3JtZWQtbXVza3JhdC04MC5jbGVyay5hY2NvdW50cy5kZXYk";

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }



const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <Postlistpage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
     <RouterProvider router={router} />
     {/* </ClerkProvider> */}
    
  </StrictMode>,
)
