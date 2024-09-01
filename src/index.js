import {createRoot} from "react-dom/client";
import "./index.css";

import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Home from "./views/home/Home";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";

const root = createRoot(document.getElementById("root"));

const router =createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])
root.render(
    <RouterProvider router={router}/>
)