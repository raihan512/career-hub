import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Hero from "../Hero/Hero";
import Reviews from "../Hero/Reviews/Reviews";
import Pricing from "../Pricing/Pricing";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <FeaturedJobs></FeaturedJobs>
      <FeaturedCategories></FeaturedCategories>
      <Reviews></Reviews>
      <Pricing></Pricing>
    </>
  );
};

export default Home;
