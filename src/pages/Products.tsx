import {Link} from "react-router-dom";

const Products = ()=>{
    return (
        <>
            <div className={"section py-5 bg-gray-50"}>
                <ul className={"flex gap-4 items-center text-gray-600 text-sm"}>

                    <Link to={"/"} className={"flex gap-4 items-center hover:text-secondary-500"}>
                        <i className="fa-solid fa-house text-base"></i>
                        <li>Home <i className="ml-2 fa-solid fa-angle-right"></i></li>
                    </Link>
                    <Link to={""}>
                    <li>Shop <i className="ml-2 fa-solid fa-angle-right"></i></li>
                    </Link>

                    <li>Shop Grid <i className="ml-2 fa-solid fa-angle-right"></i></li>
                    <li className=" text-secondary-500">Electronics Devices</li>
                </ul>
            </div>
        </>
    )
}
export default Products