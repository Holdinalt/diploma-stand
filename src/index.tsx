import React from 'react';
import './index.css';
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
import BackgroundChange from "./components/ModalPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationPage from "./components/NavigationPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </div>
        ),
    },
    {
        path: "about",
        element: (
            <div>
                <h1>We are</h1>
                <Link to="/">Home</Link>
            </div>
        ),
    },
    {
        path: "modal",
        element: <BackgroundChange />,
    },
    {
        path: "footer",
        element: <NavigationPage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
