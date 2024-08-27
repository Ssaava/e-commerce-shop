interface Product {
    id: string;
    name: string;
    price: string;
    category: string;
    description: string;
    discount: string;
    availability: string;
    brand: string;
    image: string;
    images: string[];
    colors: string[];
    deals: string;
    size: string;
    capacity: string;
    cart: boolean;
    tag: string;
    quantity: number;
    whishlist: boolean;
    rating: number[];
}

export const products:Product[] = [
    {
        id: "1",
        name: "Samsung A71 Series Comes with A Screen guard",
        price: "$70",
        category: "Smart Phones",
        description: "A high-end smartphone with a sleek design and powerful features.",
        discount: "",
        availability: "In Stock",
        brand: "TechBrand",
        image: "/images/tozo-phone.png",
        images: [
            "smartphone_x_front.jpg",
            "smartphone_x_back.jpg",
            "smartphone_x_side.jpg"
        ],
        colors: ["Black", "Silver", "Blue"],
        deals: "HOT",
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
        name: "Samsung Galaxy S21 4G. Fast Charging",
        price: "$2,300",
        category: "Smart Phones",
        description: "A high-end smartphone with a sleek design and powerful features.",
        discount: "",
        availability: "In Stock",
        brand: "TechBrand",
        image: "/images/blue-phone.png",
        images: [
            "smartphone_x_front.jpg",
            "smartphone_x_back.jpg",
            "smartphone_x_side.jpg"
        ],
        colors: [],
        deals: "",
        size: "6.5 inches",
        capacity: "128GB",
        cart: true,
        tag: "New Arrival",
        quantity: 50,
        whishlist: true,
        rating: [5, 4, 4, 5, 5]
    },
    {
        id: "3",
        name: "Amazon Basics High-Speed HDMI Cable (18Gbps, 4K/6...)",
        price: "$360)",
        category: "Electronics",
        description: "A high-end smartphone with a sleek design and powerful features.",
        discount: "",
        availability: "In Stock",
        brand: "TechBrand",
        image: "/images/high-speed-cable.png",
        images: [
            "smartphone_x_front.jpg",
            "smartphone_x_back.jpg",
            "smartphone_x_side.jpg"
        ],
        colors: ["Black", "Silver", "Blue"],
        deals: "BEST DEALS",
        size: "6.5 inches",
        capacity: "128GB",
        cart: true,
        tag: "New Arrival",
        quantity: 50,
        whishlist: true,
        rating: [5, 4, 4, 5, 5]
    },
    {
        id: "4",
        name: "Portable Black Headphones Base Sound",
        price: "$80",
        category: "Electronics",
        description: "A high-end smartphone with a sleek design and powerful features.",
        discount: "",
        availability: "In Stock",
        brand: "TechBrand",
        image: "/images/black-beats.png",
        images: [
            "smartphone_x_front.jpg",
            "smartphone_x_back.jpg",
            "smartphone_x_side.jpg"
        ],
        colors: ["Black", "Silver", "Blue"],
        deals: "",
        size: "6.5 inches",
        capacity: "128GB",
        cart: true,
        tag: "New Arrival",
        quantity: 50,
        whishlist: true,
        rating: [5, 4, 4, 5, 5]
    },
    {
        id: "5",
        name: "Wired Over-Ear Gaming Headphones with USB",
        price: "$1,500",
        category: "Electronics",
        description: "A high-end smartphone with a sleek design and powerful features.",
        discount: "",
        availability: "In Stock",
        brand: "TechBrand",
        image: "/images/gaming-headphones.png",
        images: [
            "smartphone_x_front.jpg",
            "smartphone_x_back.jpg",
            "smartphone_x_side.jpg"
        ],
        colors: ["Black", "Silver", "Blue"],
        deals: "",
        size: "6.5 inches",
        capacity: "128GB",
        cart: true,
        tag: "New Arrival",
        quantity: 50,
        whishlist: true,
        rating: [5, 4, 4, 5, 5]
    },
    {
        id: "6",
        name: "Polaroid 57-inch Photo/Video Tripod with Delux",
        price: "$1,200",
        category: "Electronics",
        description: "A high-end smartphone with a sleek design and powerful features.",
        discount: "$1600",
        availability: "In Stock",
        brand: "TechBrand",
        image: "/images/tv.png",
        images: [
            "smartphone_x_front.jpg",
            "smartphone_x_back.jpg",
            "smartphone_x_side.jpg"
        ],
        colors: ["Black", "Silver", "Blue"],
        deals: "25% OFF",
        size: "6.5 inches",
        capacity: "128GB",
        cart: true,
        tag: "Featured Product",
        quantity: 50,
        whishlist: true,
        rating: [5, 4, 4, 5, 5]
    },
    {
        id: "7",
        name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: "$250",
        category: "Electronics",
        description: "A high-end smartphone with a sleek design and powerful features.",
        discount: "$1600",
        availability: "In Stock",
        brand: "TechBrand",
        image: "/images/computer-monitor.png",
        images: [
            "smartphone_x_front.jpg",
            "smartphone_x_back.jpg",
            "smartphone_x_side.jpg"
        ],
        colors: ["Black", "Silver", "Blue"],
        deals: "",
        size: "6.5 inches",
        capacity: "128GB",
        cart: true,
        tag: "New Arrival",
        quantity: 50,
        whishlist: true,
        rating: [5, 4, 4, 5, 5]
    },
    {
        id: "8",
        name: "4K UHD LED Smart TV with Chromecast Built-in",
        price: "$220",
        category: "Electronics",
        description: "A high-end smartphone with a sleek design and powerful features.",
        discount: "$1600",
        availability: "In Stock",
        brand: "TechBrand",
        image: "/images/xperia.png",
        images: [
            "smartphone_x_front.jpg",
            "smartphone_x_back.jpg",
            "smartphone_x_side.jpg"
        ],
        colors: ["Black", "Silver", "Blue"],
        deals: "SALE",
        size: "6.5 inches",
        capacity: "128GB",
        cart: true,
        tag: "New Arrival",
        quantity: 50,
        whishlist: true,
        rating: [5, 4, 4, 5, 5]
    },
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
        link: "/products",
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
        link: "/customer-help",
    },
    {
        name: "About Us",
        link: "/about",
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