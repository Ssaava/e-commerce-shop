export const Products = [
    {
        id: "1",
        name: "Smartphone X",
        price: 799,
        category: "Electronics",
        description: "A high-end smartphone with a sleek design and powerful features.",
        discount: 10,
        availability: "In Stock",
        brand: "TechBrand",
        image: "smartphone_x_front.jpg",
        images: [
            "smartphone_x_front.jpg",
            "smartphone_x_back.jpg",
            "smartphone_x_side.jpg"
        ],
        colors: ["Black", "Silver", "Blue"],
        deals: ["Buy One Get One 50% Off", "Free Shipping"],
        size: "6.5 inches",
        capacity: "128GB",
        cart: true,
        tag: "New Arrival",
        quantity: 50,
        whishlist: true,
        rating: [5, 4, 4, 5, 5]
    },
    {
        id: "2",
        name: "Wireless Headphones",
        price: 199,
        category: "Accessories",
        description: "Noise-cancelling wireless headphones with long battery life.",
        discount: 15,
        availability: "Out of Stock",
        brand: "SoundMaster",
        image: "headphones_wireless.jpg",
        images: [
            "headphones_wireless.jpg",
            "headphones_wireless_side.jpg"
        ],
        colors: ["Black", "White", "Red"],
        deals: ["20% Off on Next Purchase", "Extended Warranty"],
        size: "One Size",
        capacity: "N/A",
        cart: false,
        tag: "Best Seller",
        quantity: 0,
        whishlist: true,
        rating: [5, 5, 4, 4, 3]
    },
    {
        id: "3",
        name: "Gaming Laptop",
        price: 1299,
        category: "Computers",
        description: "A powerful gaming laptop with a high refresh rate display and latest GPU.",
        discount: 20,
        availability: "In Stock",
        brand: "GamerTech",
        image: "gaming_laptop.jpg",
        images: [
            "gaming_laptop_front.jpg",
            "gaming_laptop_keyboard.jpg",
            "gaming_laptop_side.jpg"
        ],
        colors: ["Black", "Gray"],
        deals: ["Free Gaming Mouse", "Discount on Gaming Accessories"],
        size: "15.6 inches",
        capacity: "1TB SSD",
        cart: true,
        tag: "Limited Edition",
        quantity: 30,
        whishlist: false,
        rating: [5, 5, 5, 4, 4]
    }
];


export const categories = [
    "Computer & Laptop",
    "Smartphone",
    "Headphone",
    "Accessories",
    "Camera & Photo",
    "TV & Homes",
]

interface Links {
    name: string,
    link: string,
}
export const quickLinks: Links[] = [
    {
        name: "Shop Product",
        link: "#",
    },
    {
        name: "Shopping Cart",
        link: "#",
    },
    {
        name: "Wishlist",
        link: "#",
    },
    {
        name: "Compare",
        link: "#",
    },
    {
        name: "Track Order",
        link: "#",
    },
    {
        name: "Customer Help",
        link: "#",
    },
    {
        name: "About Us",
        link: "#",
    },
]



export const popularTags: Links[] = [
    {
        name: "Game",
        link: "#",
    },
    {
        name: "iPhone",
        link: "#",
    },
    {
        name: "Laptops",
        link: "#",
    },
    {
        name: "Macbook",
        link: "#",
    },
    {
        name: "Power Bank",
        link: "#",
    },
    {
        name: "SSD",
        link: "#",
    },
    {
        name: "Graphics Card",
        link: "#",
    },
    {
        name: "Smart TV",
        link: "#",
    },
    {
        name: "Speaker",
        link: "#",
    },
    {
        name: "Tablet",
        link: "#",
    },
    {
        name: "Microwave",
        link: "#",
    },
    {
        name: "Samsung",
        link: "#",
    },
]

interface Shop{
    img: string;
    title: string;
}
export const categoriesShop:Shop[] = [
    {
        img: "/images/tv.png",
        title: "Tv & Homes",
    },
    {
        img: "/images/accessories.png",
        title: "Accessories",
    },
    {
        img: "/images/camera-photo.png",
        title: "Camera & Photo",
    },
    {
        img: "/images/desktop.png",
        title: "Desktop",
    },
    {
        img: "/images/head-phones.png",
        title: "Headphones",
    },
    {
        img: "/images/smart-phone.png",
        title: "Smart Phones",
    },
    {
        img: "/images/tv.png",
        title: "Tv & Homes",
    },
    {
        img: "/images/accessories.png",
        title: "Accessories",
    },
    {
        img: "/images/desktop.png",
        title: "Desktop",
    },
    {
        img: "/images/head-phones.png",
        title: "Headphones",
    },
]