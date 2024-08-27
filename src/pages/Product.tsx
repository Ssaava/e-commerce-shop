import {Link} from "react-router-dom";
import Details from "@/components/Product/Details.tsx";

const Product = ()=>{
    return (
        <>
            <div className={"section py-5 bg-gray-50"}>
                <ul className={"flex gap-4 items-center text-gray-600 text-sm"}>

                    <Link to={"/"} className={"flex duration-150 gap-4 items-center hover:text-secondary-500"}>
                        <i className="fa-solid fa-house text-base"></i>
                        <li>Home <i className="ml-2 fa-solid fa-angle-right"></i></li>
                    </Link>
                    <Link to={"/"}>
                        <li>Shop <i className="ml-2 fa-solid fa-angle-right"></i></li>
                    </Link>
                    <Link to={"/"}>
                        <li>Shop Grid <i className="ml-2 fa-solid fa-angle-right"></i></li>
                    </Link>
                    <Link to={"/products"}>
                        <li>Products <i className="ml-2 fa-solid fa-angle-right"></i>
                        </li>
                    </Link>
                    <Link to={"/product"}>
                        <li className=" text-secondary-500">Macbook Pro</li>
                    </Link>

                </ul>
            </div>
            <section className={"section py-8"}>
                <Details />
            </section>
        </>
    )
}

export default Product