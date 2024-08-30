import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import Discount from "@/components/Discount.tsx";
import {products} from "@/assets/data/data.tsx";
import CartItems from "@/components/cart/CartItems.tsx";
import {extractNum} from "@/assets/utils/utils.tsx";

const Cart = ()=>{
    const filteredProducts = products.filter((product: { cart: boolean; }) => product.cart);
    return (
        <>
            <section className={"section my-8"}>
                <div>
                    <Table>
                        <TableCaption className={"py-6"}>Shopping Cart</TableCaption>
                        <TableHeader>
                            <TableRow className={"bg-gray-50 px-6 py-2 border-y-2 border-y-gray-100"}>
                                <TableHead className="">PRODUCTS</TableHead>
                                <TableHead className={"pl-8"}>PRICE</TableHead>
                                <TableHead className={"pl-8"}>Quantity</TableHead>
                                <TableHead className="pl-8">Sub Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                filteredProducts.map(({image, name, price, discount, quantity}: {image: string; name: string; discount: string; price: string; quantity: number})=>(
                                        <TableRow>
                                            <TableCell className={"max-w-96 pl-8"}>
                                                <div className={"flex gap-4 items-center"}>
                                                    <button className={"flex items-center justify-center border-[1px] border-gray-400 text-gray-400 hover:border-danger-500 w-5 h-5 rounded-full hover:text-danger-500"}><i className="fa-solid fa-xmark"></i></button>
                                                    <div className={"h-16 w-16"}>
                                                        <img src={image} alt={"Item Image"} className={"block h-full w-full"}/>
                                                    </div>
                                                    <p>{name}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell className={"pl-8"}>
                                                <Discount price={price} discount={discount} discountPosition={"left"} priceColor={"text-gray-700 font-bold"}/>
                                            </TableCell>
                                            <TableCell className={"pl-8"}>
                                                <CartItems qty={quantity}/>
                                            </TableCell>
                                            <TableCell className={"pl-8"}>
                                                <p>{extractNum(price) * quantity}</p>
                                            </TableCell>
                                        </TableRow>
                                    )
                                )}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    )
}

export default Cart