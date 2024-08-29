import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Base from "@/layouts/Base";
import PageNotFound from "@/pages/PageNotFound.tsx";
import Home from "@/pages/Home.tsx";
import Products from "@/pages/Products.tsx";
import Product from "@/pages/Product.tsx";
import Wishlist from "@/pages/Wishlist.tsx";
import Auth from "./pages/Auth";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
// create the routes to the different pages here
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Base />}>
      <Route index element={<Home />} />
      <Route path={"/products"} element={<Products />} />
      <Route path={"/product"} element={<Product />} />
      <Route path={"/wishlist"} element={<Wishlist />} />
      <Route path={"/auth"} element={<Auth />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<ContactUs />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
