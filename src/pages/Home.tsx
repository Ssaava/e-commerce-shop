import Hero from "@/components/Home/Hero.tsx";
import BestDeals from "@/components/Home/BestDeals.tsx";
import {CarouselItems} from "@/components/Home/Carousel.tsx";
import FeaturedProducts from "@/components/Home/FeaturedProducts.tsx";
import Advertising from "@/components/Home/Advertising.tsx";
import ComputerAccessories from "@/components/Home/ComputerAccessories.tsx";


const Home = ()=>{
    return (
        <>
            <Hero />
            {/*    section 2 products*/}
            <BestDeals />
            <CarouselItems />
            <FeaturedProducts />
            <Advertising />
            <ComputerAccessories />
        </>
    )
}
export default Home
