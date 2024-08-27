import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Base from "@/layouts/Base";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Home from "@/pages/Home.tsx"
import Products from "@/pages/Products.tsx";
// create the routes to the different pages here
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Base/>}>
            <Route index element={<Home/>}/>
            <Route path={"/products"} element={<Products/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Route>
    )
);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
