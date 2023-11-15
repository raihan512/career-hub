import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <FeaturedJobs></FeaturedJobs>
      <FeaturedCategories></FeaturedCategories>
    </>
  );
};

export default Home;
