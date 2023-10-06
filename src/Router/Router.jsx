
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Home/ProductDetails/ProductDetails";

const router = createBrowserRouter([
   
{
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/details/:id",
            element: <ProductDetails></ProductDetails>,
        }
    ]
}

])

export default router;