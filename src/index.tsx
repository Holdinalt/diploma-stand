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
import FormPage from "./components/FormPage";
import CartPage from "./components/CartPage";
import CarouselPage from "./components/CarouselPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div style={{display: "flex", flexDirection: "column", gap: 10, margin: 20}}>
                <h1>Choose the page</h1>
                <Link to="modal">Modal</Link>
                <Link to="footer">Navigation</Link>
                <Link to="form">Form</Link>
                <Link to="cart">Cart</Link>
                <Link to="carousel">Carousel</Link>
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
    {
        path: "form",
        element: <FormPage />,
    },
    {
        path: "cart",
        element: <CartPage />,
    },
    {
        path: "carousel",
        element: <CarouselPage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
