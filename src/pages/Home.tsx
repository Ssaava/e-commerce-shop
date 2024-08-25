import Hero from "@/components/Home/Hero.tsx";
import BestDeals from "@/components/Home/BestDeals.tsx";
import {CarouselItems} from "@/components/Home/Carousel.tsx";
import FeaturedProducts from "@/components/Home/FeaturedProducts.tsx";


const Home = ()=>{
    return (
        <>
            <Hero />
            {/*    section 2 products*/}
            <BestDeals />
            <CarouselItems />
            <FeaturedProducts />
        </>
    )
}
export default Home
